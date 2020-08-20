const checkMagazine = require("./checkMagazine");

test("should ", () => {
  const r = checkMagazine(
    "give me one grand today night",
    "give one grand today"
  );
  expect(r).toBe("Yes");
});

test("should ", () => {
  const r = checkMagazine(
    "two times three is not four",
    "two times two is four"
  );
  expect(r).toBe("No");
});

test("should ", () => {
  const r = checkMagazine(
    "ive got a lovely bunch of coconuts",
    "ive got some coconuts"
  );
  expect(r).toBe("No");
});
