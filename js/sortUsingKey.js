//Program to sort object using specified key in question

let sortUsingKeys = (object) => {
    return object.sort((itemA,itemB) => {
        if(itemA.title < itemB.title) return -1;
        return 1;
    })
}


var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

console.log(sortUsingKeys(library))