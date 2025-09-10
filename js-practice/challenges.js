// ================================
// 10 Coding Challenges with ES6+
// ================================

// 1. Reverse a string
const reverseStr = str => str.split("").reverse().join("");
console.log("Reverse:", reverseStr("hello"));

// 2. Largest number in array
const largestNum = arr => Math.max(...arr);
console.log("Largest:", largestNum([5, 1, 9, 3]));

// 3. Palindrome check
const isPalindrome = str => str === str.split("").reverse().join("");
console.log("Palindrome:", isPalindrome("madam"));

// 4. Flatten nested array
const flatten = arr => arr.flat(Infinity);
console.log("Flatten:", flatten([1, [2, [3, 4]], 5]));

// 5. Count vowels
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
console.log("Vowel Count:", countVowels("JavaScript"));

// 6. Sum of even numbers
const sumEven = arr => arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
console.log("Sum Evens:", sumEven([1, 2, 3, 4, 5]));

// 7. Remove duplicates
const removeDupes = arr => [...new Set(arr)];
console.log("Remove Dupes:", removeDupes([1, 2, 2, 3]));

// 8. Factorial recursion
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
console.log("Factorial:", factorial(5));

// 9. Merge arrays & remove duplicates
const mergeUnique = (a, b) => [...new Set([...a, ...b])];
console.log("Merge Unique:", mergeUnique([1, 2], [2, 3]));

// 10. Longest word in sentence
const longestWord = str => str.split(" ").reduce((a, b) => (b.length > a.length ? b : a));
console.log("Longest Word:", longestWord("JavaScript ES6 makes coding fun"));

