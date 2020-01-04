import { DEG_TO_RAD, RAD_TO_DEG } from "./types";

/**
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 */
export interface NativeMatrix {
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly d: number;
  readonly e: number;
  readonly f: number;
}

export interface Matrix {
  readonly type: "matrix";
  readonly matrix: NativeMatrix;
  toString(): string;
  toCSS(): string;
  asMatrix(): Matrix;
}

const MatrixPrototype = {
  type: "matrix",
  toString(this: Matrix) {
    const { a, b, c, d, e, f } = this.matrix;
    return `matrix(${a} ${b} ${c} ${d} ${e} ${f})`;
  },
  toCSS(this: Matrix) {
    const { a, b, c, d, e, f } = this.matrix;
    return `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`;
  },
  asMatrix(this: Matrix) {
    return this;
  },
};

export function matrix(matrix: NativeMatrix | readonly [number, number, number, number, number, number]): Matrix {
  if (Array.isArray(matrix)) {
    return Object.create(MatrixPrototype, {
      matrix: {
        value: {
          a: matrix[0],
          b: matrix[1],
          c: matrix[2],
          d: matrix[3],
          e: matrix[4],
          f: matrix[5],
        }
      },
    });
  }
  return Object.create(MatrixPrototype, {
    matrix: { value: matrix },
  });
}

export interface Translate {
  readonly type: "translate";
  readonly tx: number;
  readonly ty: number;
  toString(): string;
  toCSS(): string;
  asMatrix(): Matrix;
}

const TranslatePrototype = {
  type: "translate",
  toString(this: Translate) { return `translate(${this.tx} ${this.ty})` },
  toCSS(this: Translate) { return `translate(${this.tx}px, ${this.ty}px)` },
  asMatrix(this: Translate) { return matrix([1, 0, 0, 1, this.tx, this.ty]) },
};

export function translate(tx: number, ty: number): Translate {
  return Object.create(TranslatePrototype, {
    tx: { value: tx },
    ty: { value: ty },
  });
}

export interface Scale {
  readonly type: "scale";
  readonly sx: number;
  readonly sy: number;
  toString(): string;
  toCSS(): string;
  asMatrix(): Matrix;
}

const ScalePrototype = {
  type: "scale",
  toString(this: Scale) { return `scale(${this.sx} ${this.sy})` },
  toCSS(this: Scale) { return `scale(${this.sx}, ${this.sy})` },
  asMatrix(this: Scale) { return matrix([this.sx, 0, 0, this.sy, 0, 0]) },
};

export function scale(sx: number, sy: number = sx): Scale {
  return Object.create(ScalePrototype, {
    sx: { value: sx },
    sy: { value: sy },
  });
}

export interface Rotate {
  readonly type: "rotate";
  readonly angle: number;
  readonly cx: number;
  readonly cy: number;
  toString(): string;
  toCSS(): string;
  asMatrix(): Matrix;
}

const RotatePrototype = {
  type: "rotate",
  toString(this: Rotate) { return `rotate(${this.angle} ${this.cx} ${this.cy})` },
  toCSS(this: Rotate) {
    if (this.cx === 0 && this.cy === 0) {
      return `rotate(${this.angle}deg)`;
    }
    return `translate(${this.cx}px ${this.cy}px) rotate(${this.angle}deg) translate(${0 - this.cx}px ${0 - this.cy}px)`;
  },
  asMatrix(this: Rotate) {
    const sin = Math.sin(this.angle * DEG_TO_RAD);
    const cos = Math.cos(this.angle * DEG_TO_RAD);
    const tx = this.cx + (this.cx * -cos) + (this.cy * sin);
    const ty = this.cy + (this.cy * -cos) - (this.cx * sin);
    return matrix([cos, sin, -sin, cos, tx, ty]);
  },
};

export function rotate(angle: number, cx = 0, cy = 0): Rotate {
  return Object.create(RotatePrototype, {
    angle: { value: angle },
    cx: { value: cx },
    cy: { value: cy },
  });
}

export interface SkewX {
  readonly type: "skewX";
  readonly angle: number;
  toString(): string;
  toCSS(): string;
  asMatrix(): Matrix;
}

const SkewXPrototype = {
  type: "skewX",
  toString(this: SkewX) { return `skewX(${this.angle})` },
  toCSS(this: SkewX) { return `skewX(${this.angle}deg)` },
  asMatrix(this: SkewX) { return matrix([1, 0, Math.tan(this.angle * DEG_TO_RAD), 1, 0, 0]) },
};

export function skewX(angle: number): SkewX {
  return Object.create(SkewXPrototype, {
    angle: { value: angle },
  });
}

export interface SkewY {
  readonly type: "skewY";
  readonly angle: number;
  toString(): string;
  toCSS(): string;
  asMatrix(): Matrix;
}

const SkewYPrototype = {
  type: "skewY",
  toString(this: SkewY) { return `skewY(${this.angle})` },
  toCSS(this: SkewY) { return `skewY(${this.angle}deg)` },
  asMatrix(this: SkewX) { return matrix([1, Math.tan(this.angle * DEG_TO_RAD), 0, 1, 0, 0]) },
};

export function skewY(angle: number): SkewY {
  return Object.create(SkewYPrototype, {
    angle: { value: angle },
  });
}

export type Transform = Matrix | Translate | Scale | Rotate | SkewX | SkewY;

const TransformTypes = new Set(["matrix", "translate", "scale", "rotate", "skewX", "skewY"]);

export function isTransform(value: any): value is Transform {
  return typeof value === "object" && "type" in value && TransformTypes.has(value.type);
}

const IDENTITY_MATRIX = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };

function multiply(left: NativeMatrix, right: NativeMatrix): NativeMatrix {
  return {
    a: (left.a * right.a) + (left.c * right.b),
    b: (left.b * right.a) + (left.d * right.b),
    c: (left.a * right.c) + (left.c * right.d),
    d: (left.b * right.c) + (left.d * right.d),
    e: (left.a * right.e) + (left.c * right.f) + left.e,
    f: (left.b * right.e) + (left.d * right.f) + left.f,
  };
}

export function composeMatrix(transforms: readonly Transform[]): Matrix {
  return matrix(transforms.map((transform) => transform.asMatrix().matrix).reduce<NativeMatrix>(multiply, IDENTITY_MATRIX));
}

export function decomposeMatrix(matrix: Matrix): readonly [Translate, Rotate, Scale] {
  const { a, c, e, b, d, f } = matrix.matrix;
  const scaleX = Math.sqrt(a ** 2 + b ** 2);
  const scaleY = Math.sqrt(c ** 2 + d ** 2);
  const rotateAngle = Math.atan2(b, a) * RAD_TO_DEG;
  return [
    translate(e, f),
    rotate(rotateAngle),
    scale(scaleX, scaleY),
  ];
}
