# Avoiding Shared State

- A program is considered stateful if it is designed to remember data from events
  or user interactions. The **remembered information** is called **the state of program**.
- A JavaScript program stores data in variables and objects. The contents of these
  storage locations at any given moment while the program is running is considered
  its state.

### 1. shared state

- Shared State is any variable, object, or memory space that exists in a shared scope,
  or as the property of an object being passed between scopes. A shared scope can
  include global scope or closure scopes.

### 2. Avoiding Mutable Data

```js
const num = 50;

const arr = [3,4,2,5,1,6];

console.log(arr);

arr.sort();

console.log(arr); // changing the array
// objects in JS is mutable

const arr2 = [3,4,2,5,1,6];

const sortArray = function(arr) {
  return arr.sort();
};

const newNums = sortArray(arr2);

console.log(newNums);
console.log(arr2); // 역시 바껴버린다.
// because... objects are passed by reference
```

- 해결 방법 중 하나 - use strict

```js
"use strict";
const arr = [3,4,2,5,1,6];
Object.freeze(arr); // -> 이제 sort가 허용되지 않음
// 근데 뭔 의미가 있음? -> 다른 방법이 필요하다는 것임

const sortArray = function(arr) {
  return arr.sort();
};

const newNums = sortArray(arr2);

console.log(newNums);
console.log(arr2);
```

- 결국 copy를 해서 기존 object가 바뀌지 않도록 해야한다는 것

### 3. Cloning Objects

```js
let obj = {
  fName: "Steven",
  lName: "Hancock",
  score: 85,
  completion: true
};

let obj2 = Object.assign({}, obj);

obj2.score = 90;
console.log(obj);
console.log(obj2);
// { fName: 'Steven', lName: 'Hancock', score: 85, completion: true }
// { fName: 'Steven', lName: 'Hancock', score: 90, completion: true }
// 서로 영향을 안준다.


//////////////////////////////////////////////////////////////////////

let obj = {
  fName: "Steven",
  lName: "Hancock",
  score: 85,
  completion: true,
  questions: {
    q1: {success: true, value: 1},
    q2: {success: false, value: 1}
  }
};

let obj2 = Object.assign({}, obj); // shallow clone

obj2.score = 90;
obj2.questions.q1.value = 100;
console.log(obj);
console.log(obj2);
// 하위 객체는 여전히 참조되고 있다 (서로 영향을 주게 됨)
// {
//  fName: 'Steven',
//  lName: 'Hancock',
//  score: 85,
//  completion: true,
//  questions: {
//  q1: { success: true, value: 100 },
//  q2: { success: false, value: 1 }
//  }
//}

//{
//  fName: 'Steven',
//  lName: 'Hancock',
//  score: 90,
//  completion: true,
//  questions: {
//    q1: { success: true, value: 100 },
//    q2: { success: false, value: 1 }
//  }
//}
```

- **이걸 해결하려면 json stringfy를 통해 문자열로 바꾸고 다시 객체로 바꾸는 방식을 씁니다.**

```js
let obj = {
  fName: "Steven",
  lName: "Hancock",
  score: 85,
  completion: true,
  questions: {
    q1: {success: true, value: 1},
    q2: {success: false, value: 1}
  }
};

let obj2 = Object.assign({}, obj);

let obj3 = JSON.parse(JSON.stringify(obj));

obj.questions.q1.value = 500;
console.log(obj.questions); // 
console.log(obj2.questions);
console.log(obj3.questions);

// { q1: { success: true, value: 500 }, q2: { success: false, value: 1 } }
// { q1: { success: true, value: 500 }, q2: { success: false, value: 1 } }
// { q1: { success: true, value: 1 }, q2: { success: false, value: 1 } } 
// 굿이다.

```

```js
let array = [{a: 1}, {b: 2}];

let obj2 = Object.assign({}, array);

let obj3 = JSON.parse(JSON.stringify(array));

array[0].a = 5;
console.log(array);
console.log(obj2);
console.log(obj3);

// [ { a: 5 }, { b: 2 } ]
// { '0': { a: 5 }, '1': { b: 2 } }
// [ { a: 1 }, { b: 2 } ]
// array에 대해서도 여전히 작동한다.
```

```js
const arr = [3,4,2,5,1,6];

const cloneObj = function(obj) {
  return JSON.parse(JSON.stringify(obj))
};

const newNums = cloneObj(arr).sort();

console.log(newNums); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr); // [ 3, 4, 2, 5, 1, 6 ]
```

### 3. Reduce, Map, Filter

- these are higher-order function
- **reduce** and reduceRight: **combines the elements** of an array using the function you specify
- **map**: passes each element of the array to the function you provided and **returns a new array**
  **that consists of the values returned by that function**
- **filter**: **returns a new array** that is a **subset of the existing array**

```js
let arr = [1, 2, 3, 4, 5];

let total = arr.reduce(function(accumulator, elem) {
  return accumulator + elem;
}, 0);

console.log(total) // 15

let newArray = arr.map(function(val) {
  return val **2;
});
// 3개의 변수를 받을 수 있음, val, index, 원본 array
// let newArray = arr.map(function(val, index, array) {
//   return val **2;
// });

console.log(newArray); // [ 1, 4, 9, 16, 25 ]

let filterArray = arr.filter(function(val) {
  // return이 true이거나 false 이어야함
  // true면 배치하고, false면 제외함
  return val < 3;
});

console.log(filterArray); // [ 1, 2 ]


```

