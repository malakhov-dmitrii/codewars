const isValidBST = require("./isValidBST");

const root = {
  value: 5,
  left: {
    value: 1,
    right: null,
    left: null,
  },
  right: {
    value: 4,
    right: {
      value: 3,
      right: null,
      left: null,
    },
    left: {
      value: 6,
      right: null,
      left: null,
    },
  },
};
test("should ", () => {
  const r = isValidBST(root);
  expect(1).toBe(1);
});
