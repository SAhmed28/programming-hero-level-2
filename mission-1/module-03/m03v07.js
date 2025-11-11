class Node {
    constructor(value){
        this.value =  value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {

        const newNode = new Node(value);

        // if the linked list is empty
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    prepend(value) {

        const newNode = new Node(value);

        // if the linked list is empty
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    insert(index, value) {
        if(index < 0 || index > this.length){
            console.error("Index is out of bound.");
            return undefined;
        }

        // if the insert is at the start of the linked list
        if(index === 0){
            return this.prepend(value);
        }

        // if the insert is at the end of the linked list
        if(index === this.length){
            return this.append(value);
        }

        // if the insert is in the middle - find the leading node
        let count = 0;
        let leadingNode = this.head;

        while (count !== index - 1){
            leadingNode = leadingNode.next;
            count++;
        }

        console.log(leadingNode);
    }

    remove() {}

    print() {
        const arr = [];
        let currentNode = this.head;

        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(arr.join(" -> "), "-> null");
    }
}


const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);

linkedList.insert(2, 100);

linkedList.print();