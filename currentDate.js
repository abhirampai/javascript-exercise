// Program to print date in format MM/DD/YYYY or DD/MM/YYYY

let date = new Date()
let day = date.getDate()
let month =  date.getMonth() + 1 
let year = date.getFullYear()

console.log(`Format MM/DD/YYYY = ${month}/${day}/${year}`)
console.log(`Format MM-DD-YYYY = ${month}-${day}-${year}`)
console.log(`Format DD/MM/YYYY = ${day}/${month}/${year}`)
console.log(`Format DD-MM-YYYY = ${day}-${month}-${year}`)
