# `deserialization`

Strict TS types from JSON objects.

### Example: Object

```ts
const deserialized = obj(
  /** Signature. */
  {
    test1: "string",
    test2: "number",
    test3: {
      test4: "boolean"
    },
    test5: "string[]"
  },
  /** Value. */
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
```

```
Output:
┌─────────┬─────┬─────┬─────┬───────┬─────────┐
│ (index) │  0  │  1  │  2  │ test4 │ Values  │
├─────────┼─────┼─────┼─────┼───────┼─────────┤
│  test1  │     │     │     │       │ 'Hello' │
│  test2  │     │     │     │       │   42    │
│  test3  │     │     │     │ true  │         │
│  test5  │ 'a' │ 'b' │ 'c' │       │         │
└─────────┴─────┴─────┴─────┴───────┴─────────┘
```

### Example: Function

```ts
const deserialized = fn(
  /** Args signature. */
  {
    test1: "string",
    test2: "number",
    test3: {
      test4: "boolean"
    },
    test5: "string[]"
  },
  /** Return signature. */
  { success: "boolean" },
  ({ test1, test2, test3, test5 }) => {
    console.table({ test1, test2 });
    console.table({ test3 });
    console.table({ test5 });

    return { success: true };
  }
);

/** Call function. */
const output = deserialized({
  test1: "Hello",
  test2: 42,
  test3: {
    test4: true
  },
  test5: ["a", "b", "c"]
});

console.table(output);
```

```
Output:
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ success │  true  │
└─────────┴────────┘
```