function add(n1: number, n2: number) {
  return n1 + n2;
}

// 함수가 아무것도 반환하지 않을 때는
// undefined가 아니라 void를 써야한다.
function printResult(num: string): void {
  console.log('Result: ' + num);  
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;  / error

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);  
  return result;
});