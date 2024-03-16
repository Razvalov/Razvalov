class MyClass { constructor() { this.property = getRandomString(); } }

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const greet = name => `Hello, ${name}!`;
