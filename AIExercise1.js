const messageArray = [
  "Remind me when I get home to check the mail",
  "I will call you back bye Hey remind me to call John back",
];

const remind = ["remind", "reminders", "remainder"];

const connectingWords = ["me", "about", "to"];

let result = [];
messageArray.forEach((item) => {
  let reminder = item.split(" ").reduce((acc, currentValue) => {
    if (remind.includes(currentValue.toLowerCase())) return (acc = "");
    else if (connectingWords.includes(currentValue.toLowerCase()))
      return (acc = "");
    acc += " " + currentValue;
    return acc;
  }, "");
  reminder = reminder.trim();
  reminder = reminder.charAt(0).toUpperCase() + reminder.slice(1)
  result.push(reminder);
});

console.log(result);
