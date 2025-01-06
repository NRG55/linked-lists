import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

linkedList.append("cat");
linkedList.append("parrot");
linkedList.append("hamster");
linkedList.append("snake");
linkedList.append("turtle");

linkedList.prepend("dog");

// console.log(linkedList);
// console.log(linkedList.size());
// console.log(linkedList.getHead());
// console.log(linkedList.tail());
// console.log(linkedList.at(3));
// linkedList.pop();
// console.log(linkedList);
console.log(linkedList.contains("snake"));
console.log(linkedList.find("hamster"));
console.log(linkedList.toString());
linkedList.insertAt("Inserted Node", 1);
linkedList.removeAt(3);
console.log(linkedList);


