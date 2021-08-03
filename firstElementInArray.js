function first (arr, index) {
    if((index === null) || (index === undefined))
        return arr[0];
    if( index < 0 )
        return [];
    return arr.slice(0,index);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
