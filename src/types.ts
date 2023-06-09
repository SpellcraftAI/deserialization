/* eslint-disable @typescript-eslint/no-invalid-void-type */
/**
 * All supported primitive types.
 */
export interface PrimitiveTypes {
  "string": string
  "number": number
  "boolean": boolean
  "bigint": bigint
  "symbol": symbol
  "undefined": undefined
  "null": null
  "void": void
};

/**
 * A type map for arrays of all supported primitive types.
 */
export type PrimitiveArrays = {
  /**
   * Coerce keyof strings "type" -> "type[]" for compiler, map to Array<type>.
   *
   * This could be done by manually defining the array type map.
   */
  [K in keyof PrimitiveTypes as `${K}[]`]: Array<PrimitiveTypes[K]>;
};

/**
 * All primitives, including primitive arrays.
 */
export type Primitives = PrimitiveTypes & PrimitiveArrays;
export type Primitive = keyof Primitives;

/**
 * A string representing a primitive, or a recursive object of string properties
 * mapping to primitive strings or objects of the same form.
 *
 * Use string literals to define property names to prevent them from being
 * name-mangled by AOT compilers.
 *
 * @example
 * { "params": { "query": "string", "tags": "string[]" } }
 *
 * @example
 * { "test": { "a": { "b": { "c": "test" } } } }
 *
 * @example
 * "boolean[]"
 *
 * @example
 * "undefined"
 */
export type Serialized = Primitive | { [key: string]: Primitive | Serialized };

/**
 * Deserialize inferred string literal types (e.g. `"string[]"`) into actual
 * types (e.g. `Array<string>`).
 */
export type Deserialize<S extends Serialized> = (
  S extends Primitive
    ? Primitives[S]
    : {
        [K in keyof S]: (
          S[K] extends Serialized
            ? Deserialize<S[K]>
            : never
        )
      }
  );
