const circleIntersection = require("./circleIntersection");

// test("should ", () => {
//   const r = circleIntersection.toString().length;
//   expect(r).toBeLessThan(94);
// });
test("should ", () => {
  const r = circleIntersection([0, 0], [7, 0], 5);
  expect(r).toBe(14);
});

test("should ", () => {
  const r = circleIntersection([0, 0], [0, 10], 10);
  expect(r).toBe(122);
});

test("should ", () => {
  const r = circleIntersection([5, 6], [5, 6], 3);
  expect(r).toBe(28);
});
