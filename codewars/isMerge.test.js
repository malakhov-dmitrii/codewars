const isMerge = require("./isMerge");

describe("should work", () => {
  test("should merge codewars", () => {
    const res = isMerge("codewars", "code", "wars");
    // expect(res).toBe(true);
  });
  // test("should merge codewars", () => {
  //   const res = isMerge("codewars", "cdw", "oears");
  //   expect(res).toBe(true);
  // });
  // test("should merge codewars", () => {
  //   const res = isMerge("codewars", "cod", "wars");
  //   expect(res).toBe(false);
  // });
});
