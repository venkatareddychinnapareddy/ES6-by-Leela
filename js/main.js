import venkat, { myNumber as yourNumber } from './variable.js';  // so we can change name of the title from here
import {test} from './variable.js';

//import * as variableData from './variable.js'; we can mention simply import for all at once in single line



console.log(yourNumber);
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

test();

console.log(yourNumber);

console.log(venkat);


