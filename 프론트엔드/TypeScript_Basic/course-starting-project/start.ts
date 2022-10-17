function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// 이렇게 할 수 있지만 보통 안 그럼 
// 선언과 초기화을 같이하는 경우 타입 지정 잘 안함
// let number1: number = 5;
// const number1 = 5;
// 이런 경우는 함
let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
