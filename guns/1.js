const sum = arr =>
  arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });

// fib = function (numMax) {
//   for (var fibArray = [0, 1], i = 0, j = 1, k = 0; k < numMax; i = j, j = x, k++) {
//     x = i + j;
//     fibArray.push(x);
//   }
//   return fibArray;
// };
// let r = fib(19);

// console.log(sum(r));

// function isOdd(num) {
//   return num % 2;
// }
// r = r.filter(item => isOdd(item));

// console.log(sum(r));

// const isPalindrome = x => {
//   if (x < 0) return false;

//   let reversed = 0,
//     y = x;

//   while (y > 0) {
//     const lastDigit = y % 10;
//     reversed = reversed * 10 + lastDigit;
//     y = (y / 10) | 0;
//   }
//   return x === reversed;
// };

// const r = isPalindrome(100);

// const getPalindromes = (n) => {
//   const res = []
//   for (let i = 0; i <= n; i++) {
//     if (isPalindrome(i)) res.push(i);
//   }
//   return sum(res);
// }

// console.log(getPalindromes(10000));

// const str =
//   'Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve.';

// const isLetter = charCode => {
//   if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) return true;
//   else return false;
// };

// const getEpigram = str => {
//   const strArr = str.split('');
//   const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

//   const res = [];

//   strArr.forEach(letter => {
//     if (isLetter(letter.charCodeAt())) {
//       if (vowels.includes(letter)) {
//         res.push(letter.charCodeAt() * -1);
//       } else {
//         res.push(letter.charCodeAt());
//       }
//     }
//   });

//   return sum(res);
// };

// const r = getEpigram(str);
// console.log(r);

function romanize(num) {
  var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
    roman = '',
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

const range = Array.from({ length: 2660 }).map((_, idx) => {
  return romanize(idx + 1);
});

console.log(range.join('').match(/X/gi).length);
