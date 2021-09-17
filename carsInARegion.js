// Display cars in a region

const region = "USA";
const manufacturers = [
  {
    name: "Ford",
    region: "USA",
    cars: ["Fusion", "EcoSport", "Explorer", "Ranger", "Edge", "Escape"],
  },
  {
    name: "Suzuki",
    region: "Asia",
    cars: ["Carry Truck", "Carry Dump Truck", "Jimny", "Landy"],
  },
  {
    name: "PSA Peugeot-Citroën",
    region: "Europe",
    cars: [
      "Peugeot 504",
      "Citroën GS",
      "Citroën CX",
      "Simca 1307-08",
      "Simca Horizon",
    ],
  },
  {
    name: "Fiat-Chrysler",
    region: "Europe",
    cars: ["Alfa Romeo", "Pacifica", "Fiat 500X", "Fiat Egea"],
  },
  {
    name: "Honda",
    region: "Asia",
    cars: ["Civic", "Clarity", "CRV", "Freed", "S660", "Shuttle", "Legend"],
  },
  {
    name: "Jeep",
    region: "USA",
    cars: [
      "Waggoneer",
      "Wrangler",
      "Cherokee",
      "Compass",
      "Renegade",
      "Gladiator",
    ],
  },
];

let result = [];
manufacturers.forEach((manufacturer) => {
  if (manufacturer.region === region)
    result = [...result, ...manufacturer.cars];
});
console.log(result);
