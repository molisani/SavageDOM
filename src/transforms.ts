export interface Matrix {
  readonly type: "matrix";
  readonly matrix: readonly [number, number, number, number, number, number];
  toString(): string;
  toCSS(): string;
}

const MatrixPrototype = {
  type: "matrix",
  toString(this: Matrix) {
    if (this.matrix instanceof DOMMatrixReadOnly) {
      const { a, b, c, d, e, f } = this.matrix;
      return `matrix(${a} ${b} ${c} ${d} ${e} ${f})`;
    }
    return `matrix(${this.matrix.join(" ")})`;
  },
  toCSS(this: Matrix) {
    if (this.matrix instanceof DOMMatrixReadOnly) {
      const { a, b, c, d, e, f } = this.matrix;
      return `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`;
    }
    return `matrix(${this.matrix.join(", ")})`;
  },
};

export function matrix(matrix: readonly [number, number, number, number, number, number]): Matrix {
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
}

const TranslatePrototype = {
  type: "translate",
  toString(this: Translate) { return `translate(${this.tx} ${this.ty})` },
  toCSS(this: Translate) { return `translate(${this.tx}px, ${this.ty}px)` },
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
}

const ScalePrototype = {
  type: "scale",
  toString(this: Scale) { return `scale(${this.sx} ${this.sy})` },
  toCSS(this: Scale) { return `scale(${this.sx}, ${this.sy})` },
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
}

const SkewXPrototype = {
  type: "skewX",
  toString(this: SkewX) { return `skewX(${this.angle})` },
  toCSS(this: SkewX) { return `skewX(${this.angle}deg)` },
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
}

const SkewYPrototype = {
  type: "skewY",
  toString(this: SkewY) { return `skewY(${this.angle})` },
  toCSS(this: SkewY) { return `skewY(${this.angle}deg)` },
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
