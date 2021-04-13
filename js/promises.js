let promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Done with Promise');
    },2000)
});

promise.then((data) =>{
    document.querySelector('.promise').innerHTML = data;
}).catch((err) =>{
    console.error(err);
});

console.log('General Text');

//All and Race concept in promises
let promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve ('Done with Promise');
    }, 3000);
});

let promise2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject ('Done with Rejected');
    }, 2000);
});

Promise.all([promise1, promise2]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);   // All executes the which one is rejected 
});

Promise.race([promise1, promise2]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);   // In race it executes the first one which is mentioned in array i.e, promise1 and with respect to time
});