//Program to sort elements in array

function reArrangeElementsArray(arr) {
    arr.sort((a, b) => {
        if(a < b) return -1;
        return 1;
    })
    return arr
}

var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(reArrangeElementsArray(arr1))
