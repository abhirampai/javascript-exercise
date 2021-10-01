const locations = [
  {
    id: 1,
    name: "Gotham",
    diseases: ["COVID-19", "Disease-A", "Disease-B"],
  },
  {
    id: 2,
    name: "NeverLand",
    diseases: ["Disease-R", "Disease-H", "Disease-G"],
  },
  {
    id: "3",
    name: "Asgard",
    diseases: ["Disease-L", "COVID-19", "Disease-B"],
  },
];

let finalResult = [];
locations.forEach((location) => {
  if (location.diseases.includes("COVID-19")) {
    location.diseases.splice(location.diseases.indexOf("COVID-19"), 1);
    finalResult = [...finalResult, ...location.diseases];
  }
});
console.log([...new Set(finalResult)]);
