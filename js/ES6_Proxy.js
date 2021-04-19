// class Person {
//     constructor(name,age,city){
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
// }

// let handler = {
//     get : (obj,key) => {
//         return key in obj ? obj[key] : 'Not Mentioned';
//     },
//     set : (obj,key,value) => {
//         if(value.length > 3) {
//             Reflect.set(obj,key,value);
//         }
//     }
// }

// let person = new Person('Randy',33,'Texas');
// let proxy = new Proxy(person,handler);

// console.log(proxy.age); // proxy checks the data that present in object or not and returns to it

// proxy.name = 'ya';
// console.log(proxy.name); 

// proxy.city = 'gr';    // if condition is not satisfied it will return to the initial values 
// console.log(proxy.city);





// // Proxy for function

// let log = (messege) => {
//     console.log('The log messege is' + messege);
// }

// let handlerr = {
//     apply: (fname, thisarg, arglist) => {
//         if(arglist.length === 1){
//             Reflect.apply(fname, thisarg, arglist);
//         }
//         else{
//             console.log('not allowed');
//         }
//     }
// }

// let proxyy = new Proxy(log,handlerr);
// proxyy(' Hello Wenkat');

//Revocable proxyy

let data = {
    name : 'Kevin',
    age:22,
    city: 'San Francisco'

};

let handler = {
    get : function (obj,key) {
        return Reflect.get(obj,key);
    }
};

let {proxy, revoke} = Proxy.revocable(data,handler);

revoke(); // revoke is used to break the connection b/w the data to output OR to remove proxy

console.log(proxy); 

console.log(data.name); // so we need to access data directly without using proxy
