//mask credit card numbers

const cardNumber = "5555 5555 5555 4444";

const creditNumber = cardNumber.split(" ").join("");
console.log(creditNumber.slice(-4).padStart(creditNumber.length, "*"));

