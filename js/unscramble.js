const word = "AEBUMRCNSSL";
const sampleDictionary = [
  "Personality",
  "Quadrillion",
  "Abandonedly",
  "Unscrambles",
  "Abashedness",
];
let result = "";
sampleDictionary.forEach((dictWord) => {
  if ([...dictWord.toLowerCase()].sort().join() === [...word.toLowerCase()].sort().join()) {
    result = dictWord;
  }
});
console.log(result);
