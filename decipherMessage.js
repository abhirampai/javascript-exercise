//Decipher message

const key = 13;
const message =
  "12The 908happy 468party 208troops 333will 124never 42fail 936to 761move 202my 765heart. 412This 297happened 1040again 64in 70the 17Coffee 780Shop 208today 55at 210sunset 99time. 321I 3want 2to 404visit 3all 313of 416the 99seven 23wonders 3123of 21the 09world";

let finalResult = "";
splittedMessage = message.split(" ");
finalResult = splittedMessage.reduce((acc, currentValue, index) => {
  if (parseInt(currentValue) % key === 0) {
    acc += " " + splittedMessage[index + 1];
  }
  return acc;
}, "");
console.log(finalResult.replace(/[0-9]/g, "").trim());
