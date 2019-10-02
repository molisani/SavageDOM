
export type Select<T, P> = Pick<T, {
  [K in keyof T]: T[K] extends P ? K : never;
}[keyof T]>;

export type Replace<T, R> = {
  [K in keyof T]: R;
};

export type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
