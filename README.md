# `fn-sig`

Strictly typed functions from serializable objects.

### Example

```ts
const fn = fromSignature(
  {
    "test1": "string",
    "test2": "number",
    "test3": {
      "test4": "boolean",
    },
    "test5": "string[]",
  },
  "void",
  ({ test1, test2, test3, test5 }) => {
    console.log(test1, test2, test3.test4, test5);
  },
);

fn({
  test1: "Hello",
  test2: 42,
  test3: {
    test4: true,
  },
  test5: ["a", "b", "c"],
});
```