function *gen(end){
    for(let i=0; i<end; i++){
        try{
        yield i;
        } catch(e){
            console.log(e);
        }
    }
}

let it = gen(5);

console.log(it.next());
console.log(it.throw('Hey venkat its an error')); // its an error throwing messege
console.log(it.next());
console.log(it.next());
console.log(it.return('Hello venkat its an returning messege'));
console.log(it.next());
