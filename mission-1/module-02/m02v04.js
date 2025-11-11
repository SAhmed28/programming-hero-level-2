// ------------------------------ some =  return true/false ---------------------------------------

const numbers = [1, 5, 3, 7, 5];
const hasEvenNumber = numbers.some( (number) => number % 2 === 0);
console.log(hasEvenNumber);

// real life scenario, user role privilage check
const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) => featureAccessRoles.includes(role));
console.log(canAccess);


// ------------------------------- array from: create arrays ------------------------------------------
// create square array of the items in the array
const arr = Array.from([1, 2, 3], (value, i) => value * value);
// console.log(arr);

// range: to create array defining start, stop and step. [code not clear]
const range = (start, stop, step) => Array.from( {length: Math.ceil(stop - start) / step}, (_,i) => start + i * step );
console.log(range(0, 11, 2));