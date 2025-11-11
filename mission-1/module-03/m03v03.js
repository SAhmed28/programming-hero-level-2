// Stack implementation in Class
// use of push(), pop(), peek() = see the last array element
// see use of array methods: slice, reverse, join


class Stack{
    constructor(){
        this.items = [];
    }

    //* O(1)
    push(value){
        this.items.push(value);
    }
    
    //* O(1)
    pop(){
        if(this.isEmpty()){
            return undefined;
        }

        return this.items.pop();
    }

    //* O(1)
    peek(){
        if(this.isEmpty()){
            return undefined;
        }

        return this.items[this.items.length - 1];
    }

    //* O(1)
    isEmpty(){
        return this.items.length === 0;
    }

    //* O(n)
    print(){
        console.log(this.items.slice().reverse().join(" -> "));
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

//* if a function returns something, we need console.log to see it
//* always use () to access a method.
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());