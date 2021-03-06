//Program to print date and time in expected format

let date = new Date();
let day = [
  "Sundy",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(`Current Day is ${day[date.getDay()]}`);

let hours = date.getHours();
let merideim =
  hours < 13 ? hours.toString() + " AM" : (hours - 12).toString() + " PM";
let min = date.getMinutes();
let sec = date.getSeconds();

console.log(
  `Current Time is ${merideim} : ${
    String(min).length > 1 ? min : "0" + String(min)
  } : ${String(sec).length > 1 ? sec : "0" + String(sec)}`
);
