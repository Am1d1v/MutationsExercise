

/*

const person = {
    name: "Bob",
    age: 22
}
console.log(person);

person.age = 30;
person.isAdult = true;
console.log(person);

*/

/*

const person = {
    name: "Bob",
    age: 22
}
console.log(person);


const person2 = person;
person2.age = 40;
console.log(person2);

*/

/*

const person = {
    name: "Bob",
    age: 22
}
console.log(person);

const person2 = Object.assign({}, person);

person2.age = 30;
console.log(person2);

*/

/*

const person = {
    name: "Bob",
    age: 22
}
console.log(person);

const person2 = {...person};
person2.name = "Anna";
person2.age = 27;
console.log(person2);

*/

const person = {
    name: "Bob",
    age: 22
}
console.log(person);

const person2 = JSON.parse(JSON.stringify(person));
person2.name = "Alice";
person2.age = 30;
console.log(person2);

//const person3 = JSON.stringify(person2);
//console.log(person3);