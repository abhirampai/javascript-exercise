//Program to find sum of squares of numbers

let sumOfSquares = (arr) => {
    return arr.reduce((acc, value) => {
        return acc + Math.pow(value,2)
    }, 0);
}

console.log(sumOfSquares([1,2,3,4]))