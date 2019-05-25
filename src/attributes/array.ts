import { asNativeParser, NativeAttributeParser } from "./getter";
import { asNativeSerializer, AttributeStringSerializer, NativeAttributeSerializer } from "./setter";

export const stringArrayParser = asNativeParser<string[]>((repr: string | null) => {
  return (repr) ? repr.split(/\s/) : [];
});

export function arrayParser<T>(parser: NativeAttributeParser<T>): NativeAttributeParser<T[]> {
  return asNativeParser((repr: string | null) => (repr) ? repr.split(/\t/).map(parser) : []);
}

export function arraySerializer<T>(serializer: AttributeStringSerializer<T>): NativeAttributeSerializer<T[]> {
  return asNativeSerializer((value) => value.map(serializer).join("\t"));
}
