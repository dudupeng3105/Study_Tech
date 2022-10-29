let userInput: unknown; // 뭘 넣을지 모를 때, 모든 것을 허용하는 것은 아님
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (ture) {}
}

const result = generateError('An error occurred!', 500);
console.log(result);
