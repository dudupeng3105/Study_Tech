// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; // Array
//   role: [number, string]; // Tuple
//   // Tuple은 더 엄격하게 하기 좋음
// } = {
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  // role: [2, 'author']
  role: Role.ADMIN
};

// person.role.push
// ('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

let favoriteActivities: any[];
favoriteActivities = ['Sports'];


console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
  console.log('is author');
}