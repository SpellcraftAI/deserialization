/* eslint-disable no-constant-condition */
import test from "ava";
import { fn, obj } from "../src/serialized";

test("functions", async (t) => {
  const deserialized = fn(
    {
      test1: "string",
      test2: "number",
      test3: {
        test4: "boolean"
      },
      test5: "string[]"
    },
    { success: "boolean" },
    ({ test1, test2, test3, test5 }) => {
      console.table({ test1, test2 });
      console.table({ test3 });
      console.table({ test5 });

      return { success: true };
    }
  );

  const output = deserialized({
    test1: "Hello",
    test2: 42,
    test3: {
      test4: true
    },
    test5: ["a", "b", "c"]
  });

  console.table(output);
  t.snapshot(output);
});

test("objects", async (t) => {
  const deserialized = obj(
    {
      test1: "string",
      test2: "number",
      test3: {
        test4: "boolean"
      },
      test5: "string[]"
    },
    {
      test1: "Hello",
      test2: 42,
      test3: {
        test4: true
      },
      test5: ["a", "b", "c"]
    }
  );

  console.table(deserialized);
  t.snapshot(deserialized);
});
