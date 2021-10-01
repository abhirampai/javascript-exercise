//Program to get length of object

let getLengthOfObject = (obj) => {
    return Object.keys(obj).length
}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
};

console.log(getLengthOfObject(student))

