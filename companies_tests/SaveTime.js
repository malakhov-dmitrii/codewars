/**
 * Даны два массива, значения в них расположены по неубыванию.
 * Необходимо вывести все значения из первого массива, которых нет во втором, за O(n).
 **/

/*
 *
 * @param {number[]} a1
 * @param {number[]} a2
 */
const solution = (a1, a2) => {
  const a2set = new Set(a2);
  return a1.filter((num) => !a2set.has(num));
};

const arr1 = [0, 0, 1, 2, 4, 5, 6, 6, 7, 10];
const arr2 = [0, 0, 0, 2, 3, 4, 5, 6, 6, 10];

console.log(solution(arr1, arr2));
