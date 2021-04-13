function *select() {  // by assigning star it is a generator function
    yield 1;
    yield 2;
}
let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());


function *gen() {  
    yield 'venkat';
    yield 'reddy';
}
let obj = {
    [Symbol.iterator]:gen
};
for(let element of obj){
    console.log(element);
}