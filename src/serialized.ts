/**
 * @fileoverview
 *
 * These are type-guards that infer types from serialized strings. The functions
 * will get compiled away at runtime as they are of form (x) => x.
 */
import type { Deserialize, Serialized } from "./types";

/**
 * Deserializes the given object signature.
 */
export const obj = <Shape extends Serialized>(
  _shape: Shape,
  _obj: Deserialize<Shape>
) => {
  return _obj;
};

/**
 * Deserializes the given function signature.
 */
export const fn = <Args extends Serialized, Returns extends Serialized>(
  _args: Args,
  _returns: Returns,
  fn: (args: Deserialize<Args>) => Deserialize<Returns>
) => {
  return fn;
};
