/* eslint-disable no-console */

import { type Deserialize, type Signature } from "./types";

/**
 * Create a function whose args and return types are specified via a
 * serializable signature.
 *
 * This function is redundant at runtime and should get compiled away.
 */
export function fromSignature<
  T extends Signature,
  R extends Signature
> (
  _args: T,
  _returns: R,
  fn: (args: Deserialize<T>) => Deserialize<R>
) {
  return fn;
}
