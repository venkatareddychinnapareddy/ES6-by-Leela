let symbol = Symbol('debug');     // creates unique id for every symbol
let anotherSymbol = Symbol('debug');


console.log(symbol === anotherSymbol);  // even if we give same value inside the symbol it creates unique id for every symbol so it gives false


let obj = {
    name : 'venkata reddy',
    city : 'hyderabad',
    contact : 9701269953,
    [symbol]: 22  // a unique id for it
}
console.log(obj.name);

for(let key in obj) {
    console.log(key); // so its clear that it only prints only name but not symbol
    console.log(obj[key]);  // here key value is name ie.,venkata reddy
}


//2.shared symbol

let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

console.log(symbol1 == symbol2);

let person = {
    name : 'Steve Smith',
    age : 22
};

makeAge = () => {
    let symbol = Symbol.for('age');
    person[symbol] = 30;
}

makeAge();
console.log(person[symbol1]);
console.log(person['age']);


//3.Well known symbols

class User {}
User.prototype[Symbol.toStringTag] = 'User';

let user = new User();
console.log(user.toString());


let numbers = [1,2,3];

numbers[Symbol.toPrimitive] = function () {
    return 99;
}
console.log(numbers+1)