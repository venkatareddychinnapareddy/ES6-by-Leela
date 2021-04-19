let set = new Set([1,2,3,4]);

set.add(1100);
set.add(100);

//console.log(set.delete(2));

console.log(set.has(8));

//set.clear();

for(let value of set.values()) {    //set.values,entries,keys
    console.log(value);
}

//console.info('Its Size of the set');
//console.log(set.size);

//weakset
let obj1 = {a:1};
let obj2 = {b:1};
let sets = new WeakSet([obj1, obj2 ,obj2]);

console.log(sets.has(obj2));