//Print Pattern Of Arrays

let patternPrint = (arr) => {
    let row = 0;
    arr.forEach((item) => {
        console.log(`row ${row++}`)
        item.forEach((item1) => {
            console.log(` ${item1}`)
        })
    })
}

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

patternPrint(a);