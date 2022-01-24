const productOfArrayExceptSelf = array =>
  array.map((_, i) =>
    array.reduce((product, val, j) => {
      const r = product * (i === j ? 1 : val);
      return r === -0 ? 0 : r;
    }, 1)
  );

const array1 = [1, 2, 3, 4];
const array = [-1, 1, 0, -3, 3];
console.log(productOfArrayExceptSelf(array));
