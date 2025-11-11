// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

console.log(numbers.sort((a,b) => a - b));    // sort numbers - just memorize
console.log(fruits.sort((a,b) => a.localeCompare(b)));    // case insensitive string sort


// Nested array to Flat array
const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];
console.log(arr.flat(Infinity));    //flat(2) = upto 2 level flat


// flat + unique (Set = object) + Spred (back to array)
const tagsFromPosts = [
    ["javascript", "react", "css"],
    ["node", "express"],
    ["css", "html", "react"],
  ];

const filterTags = [...new Set(tagsFromPosts.flat())]
console.log(filterTags);