'use strict';
// 1)

// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// Solution
// for(let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 100);
// }

// 2)
// Написать реализацию функции flow, создающую функцию, которая прогонит переданные в неё данные через все функции, переданные в сам flow.

// Пример использования:

// const add = x => y => y + x
// const multiple = x => y => y * x

// flow(
//   add(2),
//   multiple(3),
// )(4);

// Должно вывести 18 // ((4+2)*3)

// Аналог multiple(3)(add(2)(4))
// */

// Solution
// function flow(...list){
//     return (value) => {
//         return list.reduce((prev, cur) => {
//             return cur(prev);
//         }, value)
//     }
// }

// 3)
// ['1', 'z', '0', 2, true, false, {}, [], undefined, [0], ''].filter((item, idx, arr) => Boolean(item, idx, arr));

// Solution
// ['1', 'z', '0', 2, true, {}, [], [0]]

// 4)
// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => { throw x })
//   .then(x => console.log(x))
//   .catch(err => console.log(err))
//   .then(x => Promise.resolve(1))
//   .catch(err => console.log(err))
//   .then(x => console.log(x))

// Solution
// // 2, 1

// 6)

// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });

// console.log('script end');
