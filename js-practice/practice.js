// ================================
// ES6+ Feature Examples (20+)
// ================================

// 1. Arrow Functions
const add = (a, b) => a + b;
console.log("Arrow Function:", add(5, 3));

// 2. Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log("Default Params:", greet());

// 3. Template Literals
const item = "Laptop", price = 1500;
console.log(`Template Literal: The ${item} costs $${price}`);

// 4. Object Destructuring
const user = { id: 1, username: "Alice", age: 25 };
const { username, age } = user;
console.log("Destructuring:", username, age);

// 5. Array Destructuring
const nums = [10, 20, 30];
const [first, , third] = nums;
console.log("Array Destructuring:", first, third);

// 6. Spread Operator (Arrays)
const arr1 = [1, 2], arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log("Spread (Arrays):", merged);

// 7. Spread Operator (Objects)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 };
console.log("Spread (Objects):", combined);

// 8. Rest Parameters
const sumAll = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log("Rest Params:", sumAll(1, 2, 3, 4));

// 9. Shorthand Object Properties
const name = "John", city = "NY";
const person = { name, city };
console.log("Shorthand Obj:", person);

// 10. Enhanced Object Methods
const calc = {
  multiply(x, y) { return x * y; }
};
console.log("Enhanced Obj Method:", calc.multiply(4, 5));

// 11. Array map()
const square = [1, 2, 3].map(n => n * n);
console.log("Array.map:", square);

// 12. Array filter()
const evens = [1, 2, 3, 4, 5].filter(n => n % 2 === 0);
console.log("Array.filter:", evens);

// 13. Array reduce()
const total = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);
console.log("Array.reduce:", total);

// 14. for...of Loop
for (const n of [10, 20, 30]) console.log("for...of:", n);

// 15. Promise
const asyncTask = new Promise(resolve => setTimeout(() => resolve("Done!"), 500));
asyncTask.then(res => console.log("Promise:", res));

// 16. Async/Await
const loadData = async () => {
  const data = await asyncTask;
  console.log("Async/Await:", data);
};
loadData();

// 17. Optional Chaining
const customer = { profile: { email: "test@mail.com" } };
console.log("Optional Chaining:", customer.profile?.email);

// 18. Nullish Coalescing (??)
const input = null;
console.log("Nullish Coalescing:", input ?? "Default Value");

// 19. Set
const unique = new Set([1, 2, 2, 3]);
console.log("Set (unique values):", [...unique]);

// 20. Map
const roles = new Map([["admin", 1], ["user", 2]]);
console.log("Map Example:", roles.get("admin"));

// 21. Class Syntax
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a sound.`); }
}
class Dog extends Animal {
  speak() { console.log(`${this.name} barks.`); }
}
new Dog("Rex").speak();

