'use strict';
// Primitive values example
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge) // 30

//An Object using the Reference values example
const me = {
  name: 'Luigi',
  age: 30
};

//console.log('Friend', friend); 
// {name: 'Luigi', age: 27}

//console.log('Me:', me);
// {name: 'Luigi', age: 27}


// how to fix refence when dealing with Objects 
const clone = Object.assign({}, me);
clone.age = 26; 
console.log('Clone', clone);
console.log('The real me', me);
