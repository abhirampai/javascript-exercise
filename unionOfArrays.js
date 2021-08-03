//Program to find union of arrays

let unionOfArrays = (arr, arr1) => {
    let resultArray = []
    arr.forEach(item => resultArray.push(item))
    arr1.forEach(item => {
        if(!resultArray.includes(item)) resultArray.push(item)
    })
    resultArray = Array.from (new Set (resultArray))
    return resultArray.sort((itemA, itemB) => {
        if(itemA < itemB) return -1;
        return 1
    })
}

var a = [1, 2, 3]
var b = [100, 1, 2, 10]

console.log(unionOfArrays(a,b))