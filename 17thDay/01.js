// task 1
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// task 2
class LinkedList {
    constructor(){
        this.head = null; //first node
    }
    addNode(value){
        const newNode = new Node(value);
        if(this.head === null){ // if list is empty
            this.head = newNode;
        } else { //if not emoty
            let current = this.head;
            while(current.next !== null){ // reach to last node
                current = current.next;
            }
            current.next = newNode; //link node
        }
    }

    removeNode(){
        if(this.head === null) return null; //empty list
        if(this.head.next === null){ //if only head present
            this.head = null;
            return
        } else {
            let current = this.head;
            while(current.next.next !== null){
                current = current.next;
            }
            current.next = null; // remove
        }
    }

    displayLinkedList(){
        if(this.head === null) return console.log("LL is Empty");
        let current = this.head;
        while(current !== null){
            console.log(current);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.addNode("firstNode");
linkedList.addNode("2ndNode");
linkedList.addNode("3rdNode");
linkedList.addNode("4thNode");
linkedList.displayLinkedList();


// task 3
class Stack {
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }
    pop(){
        if(this.items.length === 0) return "Underflow";
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
}

// task 4
function reverseString(str){
    const newStack = new Stack();
    for(let i = 0; i < str.length; i++){
        newStack.push(str[i]);
    }
    let reversed = "";
    while(newStack.items.length > 0){
        reversed += newStack.pop();
    }
    return reversed;
}
const str = "Hello";
console.log(reverseString(str));

// task 5
class Queue {
    constructor(value){
        this.items = [];
    };

    enqueue(val){
        this.items.push(val);
    }

    dequeue(){
        if(this.items.length === 0) return "Empty Queue";
        return this.items.shift();
    }

    front(){
        if(this.items.length === 0) return "Empty Queue";
        return this.items[0];
    }
};

// task 6
class queuePrinter extends Queue {
    printjobs(){
        while(this.items.length > 0){
            console.log(`Printing: ${this.dequeue()}`);
        }
    }
};

// task 7
class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// task 8
class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const node = new TreeNode(value);
        if(this.root === null){
            this.root = node;
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                 return root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null){
                return root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    inOrder(node = this.root){
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}

const myTree = new BinaryTree();
myTree.insert(10);
myTree.insert(20);
myTree.insert(4);
myTree.insert(70);
myTree.insert(60);
myTree.insert(50);

myTree.inOrder();