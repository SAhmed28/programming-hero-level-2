// -------------------------------- type alias -----------------------------------
//* type alias = creating a variable with types! To keep the code clean

// how to write type alias?
// 'type' + 'Capitalize name'
type User = {
    id: number,
    name: {
      firstName: string,
      lastName: string,
    },
    gender: "male" | "female",
    contactNo: string,
    address: {
      division: string,
      city: string,
    },
}

const user1: User = {
    id: 123,
    name: {
      firstName: "Mr.",
      lastName: "X",
    },
    gender: "male",
    contactNo: "0177",
    address: {
      division: "Chattogram",
      city: "Chattogram",
    },
  };
  
  const user2: User = {
    id: 123,
    name: {
      firstName: "Mr.",
      lastName: "Y",
    },
    gender: "female",
    contactNo: "01999",
    address: {
      division: "Dhaka",
      city: "Dhaka",
    },
  };


  // type aliasing in variables
  type IsAdmin = true;
  const isAdmin: IsAdmin = true;


  // -------------------------------------- declaring type alias in functions -------------------------------------

  type AddFunction = (num1: number, num2: number) => number;
  const add:AddFunction = (num1,num2) => num1+num2;
