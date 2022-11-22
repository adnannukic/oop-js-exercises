let person = { name: 'Mosh' };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptors(objectBase, 'toString');
console.log(descriptor);