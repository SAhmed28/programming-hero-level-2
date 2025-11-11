// -------------------------- unique value set -------------------------

// from array to set

const arr = ['ceo', 'cto', 'manager', 'lead', 'ceo']
const set = new Set(arr);  // direct array pass

set.add("developer");    // not push! since this is != array

const convertToArray = Array.from(set);

console.log(set);
console.log(convertToArray);

console.log(set.has('ceo'));