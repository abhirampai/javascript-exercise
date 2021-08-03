//Program to list keys in object 

let listKeys = (obj) => {
    return Object.keys(obj).join(', ')
} 

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

console.log(listKeys(student))