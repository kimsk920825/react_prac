// function base_10(fn) {
//   function wrap(x, y) {
//     return fn(x, y) + 10;
//   }
//   return wrap;
// }
// function mysum(a, b) {
//   return a + b;
// }
// const return_fn = base_10(mysum);
// console.log(return_fn(1, 2));

// const base_10 = (fn) => (x, y) => fn(x, y) + 10;
// const mysum = (a, b) => a + b;
// const return_fn = base_10(mysum);
// console.log(return_fn(1, 2));

// 커링
// 일부의 인자를 고정한 새로운 함수를 반환하는 함수를 만드는 기법
// function userLogs(username) {
//   function wrap(message) {
//     console.log(`$(username) - $(message)`);
//   }
//   return wrap;
// }
// const log = userLogs('Sean Kim');
// log('Hello World');

const userLogs = (username) => (message) => {
  console.log(`$(username) - $(message)`);
};
const log = userLogs('Sean KIm');
log('hello world');
