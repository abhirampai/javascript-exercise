const s1 = "John likes Icecream";
const s2 = "Everyone likes Icecream";

console.log([...new Set([...s1, " ", ...s2].join("").split(" "))].join(" "));
