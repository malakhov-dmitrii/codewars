// const froggy = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     const first = arr[i + 1];
//     const second = arr[i + 2];

//     if (second && first) {
//       if (first === second || second < first) {
//         i += 1;
//       }
//       sum += arr[i + 1];
//     } else if (first) {
//       sum += arr[i + 1];
//     }
//   }
//   return sum;
// };

// const arr1 = [1, 100, 1000, 1];
// const a1 = froggy(arr1);
// console.log(a1);
// //

const nArr = [1, 100, 1000, 1, 1, 1, 1, 1];
const km3 = [1, 100];
const km2 = [1, 100, 1000];
const km1 = [1, 100, 1000, 1];
const k = [1, 100, 1000, 1, 1];

const froggy = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[1] : arr[0];
  }
};
