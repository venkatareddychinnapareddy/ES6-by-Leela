/*
let obj1 = {
    name : 'Venkata reddy'
}

let obj2 = {
    age : 22
}

 let obj = Object.assign(obj1, obj2);
 console.log(obj);
 */


//ES6
class Obj1 {
    constructor(){
        this.name = 'Venkata reddy';
    }
}

class Obj2 {
    constructor(){
        this.age = 22;
    }
}

let obj1 = new Obj1();
let obj2 = new Obj2();

let obj = Object.assign({},obj1, obj2);

console.log(obj instanceof Obj1); // which one is assigned first

console.log(obj.__proto__=== Object.prototype); //and here also same scenario we assigned object as first here

console.log(obj);


let person = {
    name : 'venkat'
}

let boss = {
    name : 'Boss reddy'
}

Object.setPrototypeOf(person,boss);
console.log(person.__proto__=== boss); // we assigned in the above equation as person and boss are same


//Math objects
let number = -236.369;
console.log(Math.sign(number));  // sign gives whether the number is positive or negative
console.log(Math.trunc(number)); //trunc gives truncated number which removes after (.)value
console.log(Math.floor(number)); //floor value gives the roundup value nearest to it where as trunc gives exact value 


//stratsWith,endswith,includes

let myName = 'venkata reddy';

console.log(myName.startsWith('ve'));

console.log(myName.endsWith('de'));

console.log(myName.includes('nka'));


//isNaN,isFinite,isInteger concept 

let number1 =  NaN;
console.log(Number.isNaN(number1));

let number2 = Infinity;
console.log(Number.isFinite(number2));  //to make reverse answer use(!)in the Beggining

let number3 = 20.20;  //it is not an integer it is an floating number
console.log(Number.isInteger(number3)); 