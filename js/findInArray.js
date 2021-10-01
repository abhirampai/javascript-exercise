//Program to return true if element in array return false if element not in array

const ifInArray = (arr,element) => {
    return arr.includes(element)
}

console.log(ifInArray([2, 5, 9, 6],5));