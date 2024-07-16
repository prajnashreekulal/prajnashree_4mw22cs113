function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}
let numbers = [25,34,9,99,23,45];
console.log(findMax(numbers));

let emptyArray = [];
console.log(findMax(emptyArray))