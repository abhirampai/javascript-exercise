//Program to find last N elements in array

function last (arr, index) {
    if((index === null) || (index === undefined)) {
        return arr[arr.length - 1 ];
    }
    if(index < 0) {
        return []
    }
    return arr.slice(Math.max(arr.length - index,0))
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));