function is_array (value) {
    return toString.call(value) === "[object Array]" ? true : false;
}
console.log(is_array("word"))
console.log(is_array([1,2,3,4]))