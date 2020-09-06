const isOneEditDistance = require("./isOneEditDistance");

test("should ", () => {
  const r = isOneEditDistance("ab", "acb");
  expect(r).toBe(true);
});

test("should ", () => {
  const r = isOneEditDistance("cab", "ad");
  expect(r).toBe(false);
});

test("should ", () => {
  const r = isOneEditDistance("1203", "1213");
  expect(r).toBe(true);
});
