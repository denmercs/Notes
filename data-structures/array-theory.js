/**
 * ARRAY
 * - is an ordered sequence of elements
 * - it can hold elements with different data types
 */

// push - complexity O(1)
let arr = [1, 3, 5, "seven"];
console.log(arr);
arr.push(9);
console.log(arr);

// pop - complexity O(1)
console.log(arr);
arr.pop();
console.log(arr);

// shift - complexity O(n)
console.log(arr);
arr.shift();
console.log(arr);

// unshift - complexity O(n)
console.log(arr);
arr.unshift("javascript");
console.log(arr);

// delete - complexity O(n)
arr = [1, 3, 5, "seven"];
console.log(arr);
delete arr[3];
console.log(arr);

// splice - complexity O(n)
// can be used to add or remove elements
arr = [1, 3, 5, "seven", 10];
console.log(arr);
arr.splice(2, 0, "four");
console.log(arr);

// slice - complexity O(n)
// can be use to add or remove elements and returns a new array
arr = [1, "two", 3, 4, 5, "six", "seven", 8, "nine", 10];
let newArray = arr.slice(4);
console.log(newArray);

// concat - complexity O(m + n)
arr = [1, "two", 3, 4, 5];
let arr2 = ["six", "seven", 8, "nine", 10];
let mergedArray = arr.concat(arr2);
console.log(mergedArray);

// for  ... of statement
// loop to iterate over iteratble object (Arrays and array-like objects)
for (let val of arr) {
  console.log(val);
}

// const -> blocked scope.
/**
 * Variable declared with const cannot be redeclared or reassigned
 *
 */
const pi = 3.14;
console.log(pi);
pi = 3;

// var -> function scope.
/**
 * variable is declared anywhere else besides a function
 * using var, it will always exist in the global scope.
 *
 */

function foo() {
  var n = 6;
  console.log(n);
}

var n = 5;
console.log(n);
foo();

// let -> lets you defined variables that are blocked scope
for (let i = 0; i < 3; i++) {
  console.log(i);
}
