const multipliers = {
  hundred: 100,
  hundreds: 100,
  thousand: 10,
  thousands: 10,
  million: 1000000,
  millions: 1000000,
};

const wordMap = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

/**
 *
 * @param {string} string - input string
 */
const parseInt = (string) => {
  const words = string.split(" ");

  if (words[words.length - 1] === "thousand") {
    multipliers.thousand = 1000;
    multipliers.thousand = 1000;
  }

  const wordsReduced = words.reduce((prev, current, index, array) => {
    if (current === "and") return prev;

    const complexWord = current.split("-");
    if (complexWord.length != 1) {
      return wordMap[complexWord[0]] + wordMap[complexWord[1]] + prev;
    } else {
      const num = wordMap[current];
      const multiplier = multipliers[current];

      if (multiplier) {
        return multiplier * prev;
      }

      return num + prev;
    }
  }, 0);

  return wordsReduced;
};

console.log(parseInt("one"));
console.log(parseInt("twenty"));
// parseInt("twenty");
console.log(parseInt("two hundred forty-six"));
console.log(
  parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
);
