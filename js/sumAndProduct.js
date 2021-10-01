//Program to find product and sum of numbers in an array

function sum(arr) {
    return arr.reduce((acc,currentValue) => {
        return acc + currentValue;
    }, 0)
}

function product(arr) {
    return arr.reduce((acc,currentValue) => {
        return acc * currentValue;
    }, 1)
}

var a = [1,2,3,4]
console.log(`Sum Of array elements= ${sum(a)}`)
console.log(`Product Of array elements= ${product(a)}`)