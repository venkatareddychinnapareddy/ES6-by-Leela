let fruits = {
    name : 'apples,grapes'
    
};

let vegetables = {
    name : 'brinjal,tomato'
};

let cloths = {
    name : 'jeans,shirts,hoddies,blazzer'
};

let basket = new Map();

basket.set('fruits',fruits);
basket.set('veggie',vegetables);
basket.set('shopping',cloths);

console.log(basket.size);

console.log(basket.get('veggie'));

console.log(basket.size);

console.log(basket.get('shopping'));

basket.delete('shopping');

console.log(basket.size);

console.log(basket.get('shopping'));

//finally we can clear everything by this code 

// basket.clear();
// console.log(basket.size);

//keys,values,entries

for(let entry of basket.entries()) {
    console.log(entry);
}

 let key1 = {a: 1};
 let key2 = {b: 1};
 let key3 = {c: 1};

let baskets = new WeakMap();

baskets.set(key1,fruits);
baskets.set(key2,vegetables);
baskets.set(key3,cloths);

console.log(baskets.get(key3));// so WeakMap erases the basket data 
console.log(baskets); // so it hide the data