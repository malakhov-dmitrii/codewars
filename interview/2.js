// 1c, 5c, 10c, 25c, 50c, and $1
/**
 *
 *
 * @param {number} money
 * @param {number} price
 */
const getChange = (money, price) => {
  const amounts = [0.01, 0.05, 0.1, 0.25, 0.5, 1];
  const res = [0, 0, 0, 0, 0, 0];

  let ret = money - price;
  let offset = 0;
  const getNextBiggest = () => {
    offset += 1;
    return amounts[amounts.length - offset];
  };
  let biggest = getNextBiggest();

  while (true) {
    while (biggest > ret) {
      biggest = getNextBiggest();
    }
    switch (biggest) {
      case 1:
        res[5] += 1;
        break;
      case 0.5:
        res[4] += 1;
        break;
      case 0.25:
        res[3] += 1;
        break;
      case 0.1:
        res[2] += 1;
        break;
      case 0.05:
        res[1] += 1;
        break;
      case 0.01:
        res[0] += 1;
        break;
    }

    ret = +(ret - biggest).toPrecision(3);
    if (isNaN(ret)) break;
    if (ret < 0) break;
  }
  return res;
};

console.log(
  // getChange(5, 0.99) // should return [1,0,0,0,0,4]
  getChange(3.14, 1.99), // should return [0,1,1,0,0,1]
  getChange(3, 0.01), // should return [4,0,2,1,1,2]
  getChange(4, 3.14), // should return [1,0,1,1,1,0]
  getChange(0.45, 0.34) // should return [1,0,1,0,0,0]
);
