const reverse = require("./reverseInteger");

test("should ", () => {
  const r = reverse(123);
  expect(r).toBe(321);
});
test("should ", () => {
  const r = reverse(-123);
  expect(r).toBe(-321);
});
test("should ", () => {
  const r = reverse(120);
  expect(r).toBe(21);
});
