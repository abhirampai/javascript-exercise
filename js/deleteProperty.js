//Program to delete rollno key from the given object

let deleteProperty = (obj) => {
    delete obj.rollno
    return obj
}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

console.log("Before deleting rollno",student)
console.log("After deleting rollno",deleteProperty(student))