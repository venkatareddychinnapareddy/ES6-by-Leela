import { myNumber } from './variable.js';

console.log(myNumber);
console.log('hai');

class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let person = new Person('Venkata reddy',22,'Male');
console.log(person);