import { BaseAttributes } from "./base";

export type AttributeStringSerializer<T> = (value: T) => string;

export interface NativeAttributeSerializer<T> extends AttributeStringSerializer<T> {
  type: "native";
}

export function asNativeSerializer<T>(serializer: AttributeStringSerializer<T>): NativeAttributeSerializer<T> {
  return Object.assign(serializer, { type: "native" as const });
}

export type AttributeManualSerializer<T> = (element: SVGElement, name: string, value: T) => void;

export interface ManualAttributeSerializer<T> extends AttributeManualSerializer<T> {
  type: "manual";
}

export function asManualSerializer<T>(serializer: AttributeManualSerializer<T>): ManualAttributeSerializer<T> {
  return Object.assign(serializer, { type: "manual" as const });
}

export type AttributeSerializer<T> = NativeAttributeSerializer<T> | ManualAttributeSerializer<T>;

export type AttributeSetter<ATTRIBUTES extends BaseAttributes> = {
  [Attr in keyof ATTRIBUTES]-?: AttributeSerializer<ATTRIBUTES[Attr]>;
};

export const defaultSerializer: NativeAttributeSerializer<any> = asNativeSerializer((value: any) => String(value));
