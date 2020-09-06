/**
 *
 * @param {string} s
 */
const lengthOfLongestSubstring = (s) => {
  let n = 0;
  let str = s[0] || "";
  let longestStr = s[0] || "";
  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (str.split("").find((i) => i === element)) {
      if (str.length > longestStr.length) longestStr = str;
      str = element;
    } else str += element;

    console.log(str, longestStr);
    if (str.length > longestStr.length) longestStr = str;
  }

  return longestStr.length;
};

let r = lengthOfLongestSubstring("dvdf");
console.log(r);

module.exports = lengthOfLongestSubstring;
