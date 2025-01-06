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
            this.head = tail;
            
            return ;            
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
    
    //returns the node at the given index
    at(index) {
        let current = this.head;               

        for (let i = 0; i < index; i++) { 
            if (current === null) {
          
                return;
            };
            
            current = current.next;    
        };

        return current;
    };

    //removed the last element from the list
    pop() {
        let current = this.head;
        let previous;        

        while (current.next !== null) { 
            previous = current;           
            current = current.next;
        };

        previous.next = null;
    };

    //returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        let current = this.head;        

        while (current !== null) {
            if (current.value === value) {
                return true;
            }            
            current = current.next;
        };

        return false;
    };

    //returns the index of the node containing value, or null if not found
    find(value) {
        let current = this.head;        
        let index = 0;

        while (current !== null) { 
            if (current.value === value) {
                return index;
            }; 

            current = current.next;
            index++;
        };

        return null;
    };

    //represents a LinkedList objects as strings. In the format: ( value ) -> ( value ) -> ( value ) -> null
    toString() {  
        let current = this.head;
        let linkedListString = "";
        
        while (current !== null) {           
            linkedListString += `( ${current.value} ) -> `;
            current = current.next;
        };

        linkedListString += "null";

        return linkedListString;
    };

    //inserts a new node with the provided value at the given index
    insertAt(value, index) {      
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;

            return;
        };

        const previousNode = this.at(index - 1);       

        if (previousNode) {
            node.next = previousNode.next;
            previousNode.next = node;
        };
    };

    //removes the node at the given index
    removeAt(index) {       
        if (this.head === null) {
           
            return;
        };

        const previousNode = this.at(index - 1);     

        if (previousNode) {                   
            previousNode.next = previousNode.next.next;
        };
    };
}