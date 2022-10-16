# chap-1. Start TS

### 1. What is TypeScript

- A JS Superset
- A Language building up on JS
- Adds new Features + Advantages to JS
- Browser Can't execute it!

- TS ->(compiled to) -> JS
  - Features are compiled to JS "workarounds", possible errors are thrown

### 2. why TypeScript?

```js
function add(num1, num2) {
    return num1 + num2;
}

console.log(add('2','3')); // unwanted behavior at runtime
// 런타임 에러는 안나지만, 로직적인 문제가 있다.
// 의도는 수의 덧셈이였지만, 문자 간의 덧셈도 일어남
```

-> developers can still write invalid code! -> TS is a 'Tool' that helps developers write better code

### 3. TypeScript Overview

- TypeScript adds
  - **Types**	
  - Next-gen JavaScript Features (compiled down for older Browsers)
  - Non-JS features like interfaces or Generics
  - Meta-Programming Features like Decorators
  - Rich Configuration Options
  - Modern Tooling that helps even in non-TS Projects

- Course outline
  - TypeScript Basics
  - Compiler & Configuration Deep Dive
  - Working  with Next-gen JS Code
  - Classes & Interfaces
  - Advanced Types & TS Features
  - Generics
  - Decorators
  - Time to Practice - Full Project
  - Working with Namespaces & Modules
  - Webpack & TS
  - Third-Party Libraries & TypeScript
  - React + TS & Node.JS + TS

### 4. Working with Types

- Core Types
  - `number`  / 1, 5.3, -10 / All numbers, no differentiation between integers or floats
  - `string` / 'HI', "HI", \`HI` / All Text Values
  - `boolean` / true, false / Just these two, no "truthy" or "falsy" values

