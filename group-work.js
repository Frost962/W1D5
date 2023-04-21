// 1st example .filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 7);

console.log(result);

// 1st example .filter

const numbers = [1, 5, -9, 7, -3];

const positive = numbers.filter((number) => number > 0);
console.log(positive);

// 1st example .filter
const randomArray = ["croissant", 5, true, numbers, "ironhack"];
const strings = randomArray.filter((para) => typeof para === "string");
console.log(strings);

// 4th example: lforEach
const array1 = ["a", "b", "c", "m"];

const myFilterArray = [];

array1.forEach((element) => {
  if ((element = "a")) {
    myFilterArray.push(element);
  }
});
console.log(myFilterArray);

// 5th example: .toReversed
// for console.log it has to be in the browser it self becase node is not compatible with live server for this step

const originalArray = [1, 2, 3, 4, 5];

const reversedArray = originalArray.toReversed(); //new independent array that is reversed

console.log(reversedArray);
// [5,4,3,2,1]

console.log(originalArray);
// [1,2,3,4,5]

// reverses the originalArray
originalArray.reverse();

console.log(originalArray);
// [5,4,3,2,1]

console.log(reversedArray);
// [5,4,3,2,1], it didn't reverse again because it has nothing to do with original array anymore.

// new array variable in which we pass the .reverse() function.
const otherArray = originalArray.reverse();

console.log(otherArray);
// [1,2,3,4,5]

console.log(originalArray);
// [1,2,3,4,5] originalArray is linked to otherArray, they have the same location in the computer menory. Any change to one, will impact the other.
