const str = "erehT era a tsav rebmun fo secruoser rof gninrael erom tpircsavaJ";

let result = str.split(" ").map((item) => [...item].reverse().join(""));
console.log(result.join(" "));
