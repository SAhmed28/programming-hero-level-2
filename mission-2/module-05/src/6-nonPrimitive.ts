// Object type

// * By default object type is declared imlicitly
// * But if you declare object type, all the properties will be required (e.g. middleName)
// * to make it option use - ?
const user: {
    organization: "Programming Hero"; // value => type : literal types, or can use readonly
    firstName: string,
    middleName?: string,
    lastName: string,
    isMarried: boolean
} = {
    organization: "Programming Hero",
    firstName: "Jhankar",
    lastName: "Mahbub",
    isMarried: true
}

// user.organization = "Programming Jero";    // this way we can easily change the value, but this should be constant
console.log(user); 