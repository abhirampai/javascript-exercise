const sentence = "Good Morning, have some tea!";
const vowelFrequrency = { a: 0, e: 0, i: 0, o: 0, u: 0 };
[...sentence].forEach((item) => {
  if (Object.keys(vowelFrequrency).includes(item.toLowerCase()))
    vowelFrequrency[item.toLowerCase()] += 1;
});
let resultObj = Object.keys(vowelFrequrency).filter(
  (key) => vowelFrequrency[key] > 0
);
console.log(JSON.stringify(resultObj));
