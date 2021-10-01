//Print in the said format in [readme](https://github.com/abhirampai/javascript-exercise#hello-world-program)

let formatArray = (arr,arr1) => {
    arr.forEach((item)=> {
        x = arr.indexOf(item)+1 % 100
        let ordinarity = arr1[(x - 20) % 10] || arr1[x] || arr1[0];
        console.log(`${arr.indexOf(item) + 1} ${ordinarity} choice is ${item}`)
    })
}

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"];

formatArray(color,o)