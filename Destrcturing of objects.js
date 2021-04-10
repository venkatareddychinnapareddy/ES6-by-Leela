let obj ={
    name : 'venkata reddy',
    age : 22,
    Profile : 'engineer',
    hello : () => {
        console.log('hello this is venkat');
    }
};

let {name , age, Profile, hello} = obj;

console.log(name, age, Profile);
hello();