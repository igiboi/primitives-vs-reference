'use strict';
// Primitive values example
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge) // 30

// Reference values example
const me = {
  name: 'Luigi',
  age: 30
};

const friend = me;
friend.age = 27;

console.log('Friend', friend); 
// {name: 'Luigi', age: 27}

console.log('Me:', me);
// {name: 'Luigi', age: 27}