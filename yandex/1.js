// 1)

// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000000);
// }

// const delay = (fn, ms) => new Promise((res, rej) => setTimeout(() => res(), ms));

// for(var i = 0; i < 10; i++) {
//     delay(() => console.log(i), 10000)
// }

// --------

// for(var i = 0; i < 10; i++) {
//     const fn = () => {
//         console.log(i);
//     };

//     setTimeout(() => {
//         fn();
//     }, 1000);
// }

// for(let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000000);
// }

// 2)

// const strjoin = () => {
//     let res = "";
//     for (let i = 1; i < arguments.length; i+= 1) {
//         if (i !== 1 && !arguments.length) {
//             res += arguments[i];
//         }
//         else {
//             res += arguments[0] + arguments[i];
//         }
//     }
//     return res;
// }

// strjoin('.', 'a', 'b', 'c') //'a.b.c'
// strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f') //'a-b-c-d-e-f'

// 3)

// input:

// var hubs = [
//   {
//     host: 'hub01',
//     browserName: 'firefox',
//     active: 3,
//     total: 10
//   },
//   {
//     host: 'hub02',
//     browserName: 'chrome',
//     active: 2,
//     total: 5
//   },
//   {
//     host: 'hub03',
//     browserName: 'firefox',
//     active: 0,
//     total: 10
//   }
// ]

// output:

// {
//   firefox: {
//     active: 3,
//     total: 20
//   },
//   chrome: {
//     active: 2,
//     total: 5
//    }
// }

// const monitor = (hubs) => {
//     const res = {};

//     for (let hub of hubs) {
//         if (res[hub.browserName]) {
//             res[hub.browserName].active += hub.active;
//             res[hub.browserName].total += hub.total;
//         } else {
//             res[hub.browserName] = {
//                 active: hub.active,
//                 total: hub.total
//             }
//         }
//     }

//     return res;
// }

// 4)

// ['1', 'z', '0', 2, true, false, {}, [], undefined, [0], ''].filter((item, idx, arr) => Boolean(item, idx, arr));

// ['1', 'z', '0', 2, true, {}, [], [0]]

// 5)

// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => { throw x })
//   .then(x => console.log(x))
//   .catch(err => console.log(err))
//   .then(x => Promise.resolve(1))
//   .catch(err => console.log(err))
//   .then(x => console.log(x))

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

fetch('https://jsonplaceholder.typicode.com/todos');
