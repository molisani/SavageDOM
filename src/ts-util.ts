
export type Select<T, P> = Pick<T, {
  [K in keyof T]: T[K] extends P ? K : never;
}[keyof T]>;

export type Replace<T, R> = {
  [K in keyof T]: R;
};

export type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

export function assert(condition: boolean, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function isTypedArray<T>(value: unknown, isType: (item: unknown) => item is T): value is readonly T[] {
  return Array.isArray(value) && value.every(isType);
}
