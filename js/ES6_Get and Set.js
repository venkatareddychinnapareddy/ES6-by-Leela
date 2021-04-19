class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
let person = Reflect.construct(Person,['venkata reddy',22]);

console.log(Reflect.isExtensible(person));

Reflect.preventExtensions(person);  // it is prevent the above object to not to add any additional data to it

console.log(Reflect.isExtensible(person));

/* Reflect.set(person,'name','Rinku');

 console.log(Reflect.get(person,'name')); */

// Create and delete Properties of Reflect API

Reflect.defineProperty(person, 'hobbies', {
    writable: true,
    value: ['badminton','Cricket'],
    configurable: true
});

Reflect.set(person,'hobbies', ["Data erased"]);//to clear the data in hobbies

//Reflect.deleteProperty(person,'hobbies');// to delete the hobbies property

console.log(Reflect.get(person,'hobbies'));  

console.log(Reflect.ownKeys(person)); // it shows all the key values what we defined