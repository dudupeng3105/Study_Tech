// const userName = 'Max';
// // userName = 'Maximilian';
// let age = 30;

// age = 29;

// function add(a:number, b:number) {  
//   let result;
//   result = a+b;
//   return result
// }

// const add = (a: number, b:number) => {
//   return a + b;
// }

// console.log(add(2,5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// // const button = document.querySelector('button');

// // if (button) {
// //   button.addEventListener('click', event => console.log(event));
// // }

// printOutput(add(5, 2));

const hobbies = ['Sports', 'Coooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30
};

// const copiedPerson = person; => same obj
const copiedPerson = { ...person }; // different obj

const add = (...numbers: number[]) => { 
  return numbers.reduce((curResult, curValue)=> {
    return curResult + curValue;
  }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2,...remainingHobbies] = hobbies; // destructure
// destructure don't change original Array

const { firstName: userName, age } = person; 
// firstName: userName => 타스아님, 자스임 firstName키로 받은
// 값을 userName으로 rename하는 것

