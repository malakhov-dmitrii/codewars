/**
 *
 *
 * @param {string} str
 */
const domino = (str) => {
  const pieces = str.split(",");
  let max = 1;
  let sequence = 1;
  for (let i = 0; i < pieces.length; i++) {
    const item = pieces[i];
    const nextItem = pieces[i + 1];
    if (item && nextItem) {
      const [l1, r1] = item.split("-");
      const [l2, r2] = nextItem.split("-");
      if (r1 === l2) sequence += 1;
      else sequence = 1;

      if (sequence > max) max = sequence;
    }
    // console.log(sequence);
  }
  return max;
};

console.log(
  // domino("6-3"), // should return 1
  // domino("1-2,1-2"), // should return 1
  // domino("1-1,3-5,5-2,2-3,2-4") // should return 3.
  domino("3-2,2-1,1-4,4-4,5-4,4-2,2-1"), // 4
  domino("5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5"), // 7
  domino("1-1,3-5,5-5,5-4,4-2,1-3"), // 4
  domino("1-2,2-2,3-3,3-4,4-5,1-1,1-2") // 3
);
