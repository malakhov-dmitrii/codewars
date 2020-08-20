const rot13 = require("./rot13");

test("should rotate", () => {
  expect(rot13("test")).toBe("grfg");
  expect(rot13("Test")).toBe("Grfg");
});
