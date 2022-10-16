// Side effect is an observable change
// outside the function, side effects
// create certain disadvantages.
// -> makes code more difficult to predict(예측)
// -> makes code hardr to debug(디버그)
// -> makes code more difficult to reason about(추론)
// 변수를 여러 함수에서 직접 변경하면 이런 부작용이 생김
// let cnt = 0;

// let increment = function() {
//   cnt ++;
//   return cnt;
// };

// side effect를 피하려면?
let increment = function(num) {
  return num + 1;
};






// 함수가 x를 변경하지 않는다는 것을 보장할 수 있는가?
// 서로 영향을 줄 수 없다는 것을 보장할 수 있냐?
// var x = 1;

// fun1();

// console.log(x);

// fun2();

// console.log(x);

// fun3();

// console.log(x);





// var MAINAPP = (function (nsp) {
//   var currentUser = 0,
//     users = [
//       { name: "James", score: 30, tries: 1 },
//       { name: "Mary", score: 110, tries: 4 },
//       { name: "Henry", score: 80, tries: 3 },
//     ];

//   var updateScore = function (newAmt) {
//     users[currentUser].score += newAmt;
//   };

//   var returnUsers = function () {
//     return users;
//   };

//   var updateTries = function () {
//     users[currentUser].tries++;
//   };

//   var updateUser = function (newUser) {
//     currentUser = newUser;
//   };

//   nsp.updateUser = updateUser;
//   nsp.updateTries = updateTries;
//   nsp.updateScore = updateScore;
//   nsp.returnUsers = returnUsers;
//   return nsp;
// })(MAINAPP || {});


// setTimeout(function() {MAINAPP.updateUser(2);}, 300);
// setTimeout(function() {MAINAPP.updateScore(20);}, 100);
// setTimeout(function() {MAINAPP.updateTries();}, 200);