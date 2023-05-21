import type { Deserialize, Serialized } from "./types";

/**
 * This is a sort of inference type guard for a function whose args and return
 * signatures are specified via the given objects.
 *
 * Calling this function is redundant at runtime and should get compiled away,
 * but is required to infer the types of the args and return value.
 */
export const fromSerialized = <Args extends Serialized, Returns extends Serialized>(
  _args: Args,
  _returns: Returns,
  fn: (args: Deserialize<Args>) => Deserialize<Returns>
) => {
  return fn;
};
