import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

linkedList.append("test1");
linkedList.append("test2");
linkedList.append("test3");
linkedList.append("test4");
linkedList.prepend("test0");

console.log(linkedList);
console.log(linkedList.size());
console.log(linkedList.getHead());
console.log(linkedList.tail());
console.log(linkedList.at(2));
