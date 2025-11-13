// object destructuring
// array destructuring
// * left side: destructured values = right side: array/object

const user = {
    id: 123,
    name: {
        firstName: 'Tanzil',
        middleName: 'Shahriar',
        lastName: 'Himel'
    },
    gender: 'male',
    favouriteColor: 'Blue'
}

// to access a property generally we do this:
// const myFavouriteColor = user.favouriteColor;
// const myMiddleName = user.name.middleName;

// with distructing
const { favouriteColor, name:{middleName} } = user;

//* type aliasing: naming the destructured value. This is not defining an object/array, 
//* therefore we cannot define the type here. 
//* It looks like the structure of type defining, but this is type aliasing. Example:
//* const { favouriteColor, name:{middleName : myMiddleName} } = user;


//---------------------- array -------------------------------
const friends = ["karim", "Rahim", "Mahim"];

const [,myBestie, ] = friends;
console.log(myBestie);
