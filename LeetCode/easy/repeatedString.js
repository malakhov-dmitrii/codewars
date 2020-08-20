function getAllIndexes(arr, val) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

/**
 *
 * @param {string} s
 * @param {number} n
 */
const repeatedString = (s, n) => {
  let c = 0,
    ca = 0,
    r = n % s.length;

  for (let i = s.length; i-- > 0; ) {
    if (s.charAt(i) == "a") {
      ++c;

      if (i < r) ++ca;
    }
  }

  return ((n - r) / s.length) * c + ca;
};

module.exports = repeatedString;
