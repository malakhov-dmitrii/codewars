/**
 *
 * @param {string} str - input string
 * @returns {number}
 */
const atoi = (str) => {
  const INT_MIN = 2 ** 31 * -1;
  const INT_MAX = 2 ** 31;
  let res = str.trim();
  if (!res) return 0;
  let sign = 1;
  if (res[0].match(/[a-zA-Z]/gi)) {
    return 0;
  } else {
    if (res[0] === "-") {
      res = res.match(/\d*/gi)[1];
      sign = -1;
    } else if (res[0] === "+") {
      res = Number(res.match(/\d*/gi)[1]);
    } else {
      res = Number(res.match(/\d*/gi)[0]);
    }
    if (res * sign > INT_MAX) return INT_MAX;
    if (res * sign < INT_MIN) return INT_MIN;
    // console.log(res.match(/\d*/gi));
  }
  return res * sign;
};

module.exports = atoi;
