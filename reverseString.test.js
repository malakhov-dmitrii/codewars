const reverseString = require("./reverseString");

test("should ", () => {
  const s = "hello".split("");
  const r = reverseString(s);
  expect(s.join("")).toBe("olleh");
});
