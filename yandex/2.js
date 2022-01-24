// // 1

// 'use strict';

// const object = {
//   value: '42',
//   print () {
//     function type() {
//       return typeof this.value;
//     }
//     const bindtype = type.bind(this);
//     console.log(`${this.value} is ${bindtype()}`);
//   }
// }

// object.print(); // ? 42 is undefined

// // 2

// /*
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

// function flow(...list){
//     return (value) => {
//         return list.reduce((prev, cur) => {
//             return cur(prev);
//         }, value)
//     }
// }

// // 3

// /**
//  * flatten.
//  *
//  * Дан массив, в котором могут храниться любые типы данных.
//  * Нужно реализовать функцию, которая разворачивает вложенные массивы в исходный массив.
//  * Данные остальных типов должны остаться без изменений.
//  */

// flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]);
// // возвращает
// //      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

// // [1, [2, 3], [4, 5]] - [ 5, 4, 3, 2, 1 ]

// function flatten(list) {
//     // code here
//     const res = []; // 1, 2, 3

//     const stack = []; // [ 4,5 ]

//     stack.push(list);

//     while(stack.length !== 0) {
//         const current = stack.pop(); //

//         if (!Array.isArray(current)) {
//             res.push(current);
//             continue;
//         }

//         for
//         stack.push(...current);
//     }
//     return res;
// }
