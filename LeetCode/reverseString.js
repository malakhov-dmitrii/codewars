/**
 *
 * @param {string[]} s
 */
const reverseString = (s) => {
  for (let i = 0; s.length / i > 2; i++) {
    let letter = s[i];
    let letterRight = s[s.length - i - 1];

    s.splice(i, 1, letterRight);
    s.splice(s.length - i - 1, 1, letter);
  }
};

module.exports = reverseString;
