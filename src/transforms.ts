
export interface Matrix {
  readonly type: "matrix";
  readonly matrix: readonly [number, number, number, number, number, number] | SVGMatrix;
  toString(): string;
}

export function matrix(matrix: readonly [number, number, number, number, number, number]): Matrix {
  return {
    type: "matrix",
    matrix,
    toString: () => `matrix(${matrix.join(" ")})`,
  };
}

export interface Translate {
  readonly type: "translate";
  readonly tx: number;
  readonly ty: number;
  toString(): string;
}

export function translate(tx: number, ty: number): Translate {
  return {
    type: "translate",
    tx,
    ty,
    toString: () => `translate(${tx} ${ty})`,
  };
}

export interface Scale {
  readonly type: "scale";
  readonly sx: number;
  readonly sy: number;
  toString(): string;
}

export function scale(sx: number, sy: number = sx): Scale {
  return {
    type: "scale",
    sx,
    sy,
    toString: () => `scale(${sx} ${sy})`,
  };
}

export interface Rotate {
  readonly type: "rotate";
  readonly angle: number;
  readonly cx: number;
  readonly cy: number;
  toString(): string;
}

export function rotate(angle: number, cx = 0, cy = 0): Rotate {
  return {
    type: "rotate",
    angle,
    cx,
    cy,
    toString: () => `rotate(${angle} ${cx} ${cy})`,
  };
}

export interface SkewX {
  readonly type: "skewX";
  readonly angle: number;
  toString(): string;
}

export function skewX(angle: number): SkewX {
  return {
    type: "skewX",
    angle,
    toString: () => `skewX(${angle})`,
  };
}

export interface SkewY {
  readonly type: "skewY";
  readonly angle: number;
  toString(): string;
}

export function skewY(angle: number): SkewY {
  return {
    type: "skewY",
    angle,
    toString: () => `skewY(${angle})`,
  };
}

export type Transform = Matrix | Translate | Scale | Rotate | SkewX | SkewY;

