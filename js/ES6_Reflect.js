class Person {
    constructor(name,age){
    this.name = name;
    this.age = age;
    }
    hello(prefix){
        console.log(prefix +`Hello World this is ${this.name} and I'm ${this.age} years old`);
    }
}

// let person = new Person();  general method of creating an object

// New concept Reflect
let person = Reflect.construct(Person, ['venkat',22]);  // its takes 3 perameters in the object,3rd perameter is optional

// console.log(person instanceof Person);
// console.log(person.__proto__=== sample.prototype);

let person2 = new Person('Tom Cruise',33); // our own data
// person.hello.call(person2);  we can use .call and .bind  to fetch this data from


// so we need to fetch or call data by using Reflect
Reflect.apply(person.hello, person2, ['Holloywod ']);  // prefix is used to send additional data into the object



class User {
    constructor() {
        this.name = name;
    }
} 

User.prototype.age = 22;
User.prototype.city = 'Hyderabad';
let user = new User();

console.log(Reflect.getPrototypeOf(user));
console.log(Reflect.getPrototypeOf(user) === User.prototype);