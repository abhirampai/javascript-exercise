const messageArray = [
  "hey there can you remind me to buy groceries tomorrow",
  "hi, remind to take the medicine everyday",
];

const extractMessage = (message) => {
  const remind = ["remind", "reminders", "remainder"];
  const connectingWords = ["me", "about", "to"];
  let reminder = message.split(" ").reduce((acc, currentValue) => {
    if (remind.includes(currentValue.toLowerCase())) return (acc = "");
    else if (connectingWords.includes(currentValue.toLowerCase()))
      return (acc = "");
    acc += " " + currentValue;
    return acc;
  }, "");
  reminder = reminder.trim();
  return reminder.charAt(0).toUpperCase() + reminder.slice(1);
};

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const map = new Map();

days.forEach((day) => {
  map.set(day, []);
});

const commonWords = ["everyday", "tomorrow", "today"];

const addToMap = (text, day) => {
  if (day == "all") {
    days.forEach((day) => {
      map.set(day, [...map.get(day), text.trim()]);
    });
  } else {
    map.set(days[day], [...map.get(days[day]), text.trim()]);
  }
};

messageArray.forEach((message) => {
  let reminderText = extractMessage(message);
  let date = new Date();
  let day = date.getDay();
  reminderText.split(" ").reduce((acc, currentValue) => {
    if (commonWords.includes(currentValue.toLowerCase())) {
      switch (currentValue) {
        case "everyday":
          addToMap(acc, "all");
          break;
        case "today":
          addToMap(acc, day);
          break;
        case "tomorrow":
          addToMap(acc, (day + 1) % 7);
          break;
      }
    } else acc += " " + currentValue;
    return acc;
  });
});
console.log(map);
