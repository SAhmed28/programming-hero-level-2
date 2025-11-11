# Module-2: Critical Thinking

## Video-5
**Reduce:** Can be used for
* counting total
* data cleanup
* creating lookup table

## Video-6
**Reduce:** Look up table
1. From an array to find something, time complexity = O(n) -> Not very efficient
2. But if we convert the array with 'id' as an index, then finding that id becomes 0(1) = constant time, doesn't need to go through each array element.

**Example**
```js
//? Input
const postsArray = [
    { id: "p-101", title: "Intro to SQL", author: "Alex" },
    { id: "p-102", title: "Data Structures in JS", author: "Beth" },
    { id: "p-103", title: "Understanding Reduce", authsor: "Chris" },
    { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
  ];
  
//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }
```


## Video-7
1. Normalization: Hashtable + Lookup table -> Helps avoid nested for loop which is O(n2)
2. user array + posts array = make it a single array to see who posted what without increasing time complexity