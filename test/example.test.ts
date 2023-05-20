/* eslint-disable no-constant-condition */
import test from "ava";
import { fromSignature } from "../src/signature";

test("types should work", async (t) => {
  const signature = {
    test1: "string",
    test2: "number",
    test3: {
      test4: "boolean"
    },
    test5: "string[]"
  } as const;

  const fn = fromSignature(
    signature,
    signature,
    ({ test1, test2, test3, test5 }) => {
      console.table({ test1, test2 });
      console.table({ test3 });
      console.table({ test5 });

      return { test1, test2, test3, test5 };
    }
  );

  const value = fn({
    test1: "Hello",
    test2: 42,
    test3: {
      test4: true
    },
    test5: ["a", "b", "c"]
  });

  t.snapshot(value);
});
