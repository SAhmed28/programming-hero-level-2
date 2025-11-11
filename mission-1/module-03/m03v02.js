/**
 * closure: function inside function
 * Lexical environment = local environment (i.e. inside local scope of a function)
 * * closure is only available in JS, not very common to use among developers since - 
 * * Not easy to read, only availble in JS, 
 */

// Functional style, making stateful -> 2 ways. Global variable and closer

// Way-1: Global variable
// let count = 0;

// const counter = (amount) => {
//     count = count + amount;
//     return count;
// }
// console.log(counter(3));
// console.log(counter(5));


// Way-2: Closure
// const createCounter = () => {
//     let count = 0;

//     return (amount) => {
//         count = count + amount;
//         return count;
//     }
// }
// const counter = createCounter();
// console.log(counter(3));
// console.log(counter(5));


// Using a Class structure: Stateful

class Counter {
    constructor(count){
        this.count = count;    // 'this' means inside the object
    }

    add(amount){
        this.count = this.count + amount;
    }

    print(){
        console.log(this.count);
    }
}

const counter1 = new Counter(0);    // 0 = start = count
counter1.add(2);
counter1.add(20);
counter1.print();