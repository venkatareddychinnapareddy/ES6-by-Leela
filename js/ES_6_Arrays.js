
let array = Array.of(5,10,15,20); // this is one type of assigning array in ES6
console.log(array);

let newArray = Array.from(array,(val) => val * 5);
console.log(newArray);

array.fill(300,1,3); // so every array will be filled with 300 and can change specific value in the array with assigning index position and ending position
console.log(array);

let fruits = [
    {name : "apples", quantity : 10},
    {name : "oranges", quantity : 20},
    {name : "bananas", quantity : 30}
];

findFruits = (fruitObj)=> {
    return fruitObj.name === 'grapes';
}
console.log(fruits.find(findFruits));