//Program to show duplicate numbers in array

const array = [1, 2, 3, 1, 2, 3, 1, 1, 4, 6, 5, 4, 6];

const filterArray = (array) => {
  return array.filter((item, index) => array.indexOf(item) !== index);
};

console.log(Array.from(new Set(filterArray(array))));
