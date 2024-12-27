import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
    };

    // Adds a new node containing value to the end of the list
    append(value) {
        const tail = new Node(value);
        let current;        

        if (this.head === null) {           
            return (this.head = tail);            
        };
        
        current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = tail;
    };
}