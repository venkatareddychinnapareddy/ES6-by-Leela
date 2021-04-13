
//1.Normal class

class Person {
    constructor(name, age, Village) {
        this.name = name;
        this.age = age;
        this.Village = Village;
        
    }
   hello () {
       console.log(`Hello World this is ${this.name} and my age is ${this.age} from ${this.Village} and my profession is ${this.profession}`);
   }
}
let person = new Person(`Venkata reddy`,22,'Guntur','ser');
person.hello();


//2.Inheritance Method

class Venkat extends Person {      // inheritence method
    constructor(profession){
        super('Venkat');
        this.profession = profession;
    }
}
let venkat = new Venkat('Student');
venkat.hello();


//3. static Method

class Helper {
    static  getMessege(messege){       //Static method
        console.log(messege);
    }
}
Helper.getMessege('Hello Venkat this is static method');


//4. Getters & Setters

class Khiladi {
      constructor(name){
            this._name = name;      //as we mentioned here (_)underscore for upcoming modifications of name
      }

      get name() {
          return this._name.toUpperCase();
      }

      set name(value){
          if(value.length > 2){
            this._name = value;
          }
          else{
              console.log('Invalid name');
          }
      }
}
let khiladi = new Khiladi('Venkata reddy');
console.log(khiladi.name);

khiladi.name ="lucky";
console.log(khiladi.name);



//5. Extend build in objects

class ExtendableArray extends Array {
    multiplyby2() {
        let returnArray = [];
        this.forEach(value => returnArray.push(value * 2));
        return returnArray;
    }
}

let array = new ExtendableArray();  

array.push(2);
array.push(4);
array.push(6);
array.push(8);

console.log(array.multiplyby2());


