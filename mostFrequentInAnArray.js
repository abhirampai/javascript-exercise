//Most frequent Item in array

function mostFrequentItem(arr1) {
    maxElement= "";
    maxCount = 0;
    count = 0;
    checked = []
    for(let i = 0;i < arr1.length;i++) {
        count = 0;
        for( let j = i;j < arr1.length;j++) {
            if(checked.includes(arr1[i]))
                continue
            if(arr1[j]==arr1[i])
                count += 1;
        }
        if(maxCount < count) {
            maxCount = count;
            maxElement = arr1[i]
        }
    }
    console.log(`${maxElement} (${maxCount} times)`)
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
mostFrequentItem(arr1);