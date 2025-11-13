// Function types - 4
// Normal, Array, Map function inside loop, function inside Object = method

// normal
function addNormal (num1:number, num2:number): number {
    return num1 + num2;
}

// arrow
const addArrow = (num1:number, num2:number): number => num1 + num2;

// addNormal(2 + "2");    // can't do that anymore

// object => function => method
const poorUser = {
    name: "Ahmed",
    balance: 0,
    addBalance(value: number): number {
        return this.balance + value;
    }
};
poorUser.addBalance(250);


// map => function
const arr: number[] = [1,4,5];

const sqrArray = arr.map((item:number):number => item * item);