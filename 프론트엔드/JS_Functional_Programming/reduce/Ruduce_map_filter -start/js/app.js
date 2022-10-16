let arr = [1, 2, 3, 4, 5];

let total = arr.reduce(function(accumulator, elem) {
  return accumulator + elem;
}, 0);

console.log(total)

let newArray = arr.map(function(val) {
  return val **2;
});

// let newArray = arr.map(function(val, index, array) {
//   return val **2;
// });

console.log(newArray);

let filterArray = arr.filter(function(val) {
  // return이 true이거나 false 이어야함
  // true면 배치하고, false면 제외함
  return val < 3;
});

console.log(filterArray);
