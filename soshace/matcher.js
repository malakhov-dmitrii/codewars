const nums1 = [2, 7, 11, 15];
const nums2 = [3, 2, 4];
const nums3 = [3, 3];
/**
 *
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */
const matcher = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const number1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const number2 = arr[j];

      if (number1 + number2 === target) {
        return [i, j];
      }
    }
  }
};

console.log(matcher(nums1, 9)); //[0,1]
console.log(matcher(nums2, 6)); //[1,2]
console.log(matcher(nums3, 6)); //[0,1]
