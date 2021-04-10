let numbers = [1,2,3,4];

let [a , ...b] = numbers;  // left arrow is called destrcturing

console.log(a);
console.log(b);


let q = 10;
let e = 20;

[q,e] = [e,q];

console.log(q);
console.log(e);

