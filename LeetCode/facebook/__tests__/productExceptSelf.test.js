const productExceptSelf = require("../productExceptSelf");

test("should ", () => {
  // tim
  const r = productExceptSelf([1, 2, 3, 4]);
  expect(r).toStrictEqual([24, 12, 8, 6]);
});

// test("should ", () => {
//   // tim
//   const r = productExceptSelf(
//     Array.from({ length: 150000 }).map((_, i) => (i % 2 === 0 ? 1 : -1))
//   );
//   expect(r).toStrictEqual(
//     Array.from({ length: 150000 }).map((_, i) => (i % 2 === 0 ? -1 : 1))
//   );
// });
