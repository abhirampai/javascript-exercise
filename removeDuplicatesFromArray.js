//Program to remove duplicate numbers from array

let removeDuplicates = (arr) => {
    let uniqueArray = Array.from(new Set(arr))
    return uniqueArray; 
}

var myNum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

console.log(removeDuplicates(myNum))