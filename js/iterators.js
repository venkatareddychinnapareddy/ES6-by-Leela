let numbers = ['venkat',2,3,'reddy'];

numbers[Symbol.iterator] = () => {
    let nextValue = 20;
    return {
        next:function () {
            nextValue++;
            return {
                done :nextValue > 30 ? true : false,
                value :nextValue
            }
        }
    }
}
for(let value of numbers) {
    console.log(value);
}
