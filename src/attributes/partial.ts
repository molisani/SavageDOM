import { asManualParser, ManualAttributeParser } from "./getter";
import { asManualSerializer, ManualAttributeSerializer } from "./setter";

export function buildPartialParser<T>(root: string, subparser: (name: string, repr: string | null) => T): ManualAttributeParser<T> {
  return asManualParser((element, name) => {
    const repr = element.node.getAttribute(root);
    return subparser(name, repr);
  });
}

export function buildPartialSerializer<T>(root: string, embed: (name: string, oldRepr: string | null, value: T) => string): ManualAttributeSerializer<T> {
  return asManualSerializer((element, name, value) => {
    const oldRepr = element.getAttribute(root);
    const newRepr = embed(name, oldRepr, value);
    element.setAttribute(root, newRepr);
  });
}
