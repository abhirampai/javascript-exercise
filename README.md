# javascript-exercise

## Hello World Program
[Program](/helloWorld.js) that prints hello world.

## Current Day and Time
Write a JavaScript program to display the current day and time in the following format.<br/>
Sample Output :<br/> Today is : Tuesday.<br/>
Current time is : 10 PM : 30 : 38<br/>
[Link to program](/currentDayAndTime.js)

## Current Date
Write a JavaScript program to get the current date.<br/>
Expected Output : <br/>
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy<br/>
[Link to program](/currentDate.js)

## Area of triangle
Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.<br/>
[Link to program](/areaOfTriangle.js)

## Check if array or not
Write a JavaScript function to check whether an input is an array or not. <br/>
Test Data :<br/>
console.log(is_array('w3resource'));<br/>
console.log(is_array([1, 2, 4, 0]));<br/>
Sample Output :<br/>
false<br/>
true<br/>
[Link to program](/checkIsAnArray.js)

## First element in array
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. <br/>
Test Data : <br/>
console.log(first([7, 9, 0, -2]));<br/>
console.log(first([],3));<br/>
console.log(first([7, 9, 0, -2],3));<br/>
console.log(first([7, 9, 0, -2],6));<br/>
console.log(first([7, 9, 0, -2],-3));<br/>
Expected Output :<br/>
7<br/>
[]<br/>
[7, 9, 0]<br/>
[7, 9, 0, -2]<br/>
[]<br/>
[Link to program](/firstElementInArray.js)

## Last n elements in array
Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. <br/>
Test Data :<br/>
console.log(last([7, 9, 0, -2]));<br/>
console.log(last([7, 9, 0, -2],3));<br/>
console.log(last([7, 9, 0, -2],6));<br/>
Expected Output :<br/>
-2<br/>
[9, 0, -2]<br/>
[7, 9, 0, -2]<br/>
[Link to program](/lastNElementsInArray.js)

## Sort elements in array
Write a JavaScript program to sort the items of an array.<br/>
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];<br/>
Sample Output : -4,-3,1,2,3,5,6,7,8<br/>
[Link to program](/sortElementsInArray.js)

## Find Most Frequently Occuring Item in an array
Write a JavaScript program to find the most frequent item of an array. <br/>
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; <br/>
Sample Output : a ( 5 times ) <br/>
[Link to program](/mostFrequentInAnArray.js)

## Swap Case 
Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.<br/>
[Link to program](/swapCase.js)

## Print Row wise data from array
Write a JavaScript program which prints the elements of the following array. <br/>
Note : Use nested for loops.<br/>
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];<br/>
Sample Output :<br/>
"row 0"<br/>
" 1"<br/>
" 2"<br/>
" 1"<br/>
" 24"<br/>
"row 1"<br/>
------<br/>
------<br/>
[Link to program](/printPatternOfArray.js)

## Print Sum Of Squares of numeric vector
Write a JavaScript program to find the sum of squares of a numeric vector.<br/>
[Link to program](/sumOfSquares.js)

## Print Sum and Product of integers in an array
Write a JavaScript program to compute the sum and product of an array of integers.<br/>
[Link to program](/sumAndProduct.js)

## Printing in the given format
We have the following arrays : <br/>
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];<br/>
o = ["th","st","nd","rd"]<br/>
Write a JavaScript program to display the colors in the following way :<br/>
"1st choice is Blue ."<br/>
"2nd choice is Green."<br/>
"3rd choice is Red."<br/>
------------- <br/>
[Link to program](/ordinalDisplayOfColors.js)

## Remove duplicates from array
Write a JavaScript program to remove duplicate items from an array<br/>
[Link to program](/removeDuplicatesFromArray.js)

## Find Element In Array
Write a JavaScript function to find an array contains a specific element.
<br/>
Test data :<br/>
arr = [2, 5, 9, 6];<br/>
console.log(contains(arr, 5));<br/>
[True]<br/>
[Link to program](/findInArray.js)

## Find Union of arrays
Write a JavaScript program to compute the union of two arrays.<br/>
Sample Data :<br/>
console.log(union([1, 2, 3], [100, 2, 1, 10]));<br/>
[1, 2, 3, 10, 100]<br/>
[Link to program](/unionOfArrays.js)

## Sorting objects with specific key
Write a JavaScript function to sort the following array of objects by title value. <br/>
Sample object :<br/>

var library = [ <br/>
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},<br/>
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},<br/>
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}<br/>
   ];<br/>

Sample Output :<br/>

[{<br/>
  author: "Suzanne Collins",<br/>
  libraryID: 3245,<br/>
  title:"Mockingjay:The Final Book of The Hunger Games"<br/>
}, {<br/>
  author: "Bill Gates",<br/>
  libraryID: 1254,<br/>
  title: "The Road Ahead"<br/>
}, {<br/>
  author: "Steve Jobs",<br/>
  libraryID: 4264,<br/>
  title: "Walter Isaacson"<br/>
}] <br/>
[Link to program](/sortUsingKey.js)

## Program to list key in object
Write a JavaScript program to list the properties of a JavaScript object. <br/>
Sample object:<br/>
var student = {<br/>
name : "David Rayy",<br/>
sclass : "VI",<br/>
rollno : 12 };<br/>
Sample Output: name,sclass,rollno<br/>
[Link to program](/listKeys.js)

## Program to delete key in object 
Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. <br/>
Sample object:<br/>
var student = {<br/>
name : "David Rayy",<br/>
sclass : "VI",<br/>
rollno : 12 };<br/>
[Link to program](/deleteProperty.js)

## Program to get length of object
Write a JavaScript program to get the length of a JavaScript object. <br/>
Sample object :<br/>
var student = {<br/>
name : "David Rayy",<br/>
sclass : "VI",<br/>
rollno : 12 };<br/>
[Link to program](/getLengthOfObject.js)

## Compare keys of 2 objects
Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
[Link to program](/compareKeys.js)