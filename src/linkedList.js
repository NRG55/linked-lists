import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.listHead = null;
    };

    append(value) {
        const newNode = new Node(value);        

        if (this.listHead === null) {           
            return (this.listHead = newNode);            
        };            
    };
}