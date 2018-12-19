import { Context } from "./context";

export type SubType<Base, Condition> = Pick<Base, {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
}[keyof Base]>;

export type ArgumentsType<T> = T extends (...args: infer A) => any ? A : never;

export type ConstructorArgumentsType<T> = T extends new (...args: infer A) => any ? A : never;

export type ElementArgumentsType<T> = T extends (context: Context, ...args: infer A) => any ? A : never;

export type ElementConstructorArgumentsType<T> = T extends new (context: Context, ...args: infer A) => any ? A : never;
