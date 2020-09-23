const atoi = require("../atoi");

test("should ", () => {
  const r = atoi("1234");
  expect(r).toBe(1234);
});
test("should ", () => {
  const r = atoi("-1234");
  expect(r).toBe(-1234);
});
test("should ", () => {
  const r = atoi("1234 str");
  expect(r).toBe(1234);
});
test("should ", () => {
  const r = atoi("str 1234");
  expect(r).toBe(0);
});
test("should ", () => {
  const r = atoi("-91283472332");
  expect(r).toBe(-2147483648);
});
