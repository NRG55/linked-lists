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

    //adds a new node containing value to the start of the list
    prepend(value) {
        let next;

        if (this.head === null) {
            this.head = new Node(value);            
        };       
        
        next = this.head;
        this.head = new Node(value);
        this.head.next = next;
    };

    //returns the total number of nodes in the list
    size() {
        let current = this.head;
        let counter = 0;

        while (current !== null) {
            counter++;
            current = current.next;
        };

        return counter;
    };

    //returns the first node in the list
    getHead() {
        return this.head;
    };

    //returns the last node in the list
    tail() {
        let current = this.head;        

        while (current.next !== null) {            
            current = current.next;
        };

        return current;
    };
}