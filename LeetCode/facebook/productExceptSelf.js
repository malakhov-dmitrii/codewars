/**
 *
 * @param {number[]} nums - input arr
 *
 */
const productExceptSelf = (nums) => {
  console.time("Execution Time");

  const output = [];
  let leftMult = 1;
  let rightMult = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
    console.log({ rightMult, output });
  }
  for (let j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
    console.log({ leftMult, output });
  }
  console.timeEnd("Execution Time");

  return output;
};
// const productExceptSelf = (nums) => {
//   console.time("Execution Time");
//   let r = [];
//   for (let i = 0; i < nums.length; i++) {
//     const arrWithoutNum = nums.slice();
//     arrWithoutNum.splice(i, 1);
//     let product = 1;
//     for (const n of arrWithoutNum) {
//       product *= n;
//     }
//     r.push(product);
//   }
//   console.timeEnd("Execution Time");
//   return r;
// };

module.exports = productExceptSelf;
