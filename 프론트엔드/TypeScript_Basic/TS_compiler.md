# TypeScript Compiler

- watch 모드
  - `tsc app.ts --watch` 
  - 이러면 한 파일에 대해서만 자동으로 js로 컴파일
- 여러 파일의 경우에는?
  - `tsc -init` -> tsconfig.json 생성
  - `tsc` -> 이제는 tsc하면 알아서 ts파일 js로 다 바꿔줌
  - `tsc --watch`도 가능하다