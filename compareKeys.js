//Program to compare keys

let checkKeys = (obj1,obj2) => {
    return Object.keys(obj2).every((key) => obj1.hasOwnProperty(key) && obj1[key] === obj2[key]);
}

console.log(checkKeys({ age: 25, hair: 'long', beard: true }, {  hair: 'long', beard: true }))
console.log(checkKeys({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); 
console.log(checkKeys({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true }));