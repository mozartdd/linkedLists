import LinkedList from "./linkedList.js";

const li = new LinkedList();

li.prepend('bat');
li.append('dog');
li.append('cat');
li.append('elephant');
li.append('mouse');
li.append('rat');
li.append('human');
li.append('ape');
li.append('mosquito');

console.log(li.removeAt(7));

console.log(li.toString());