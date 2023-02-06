let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, NC, M, MC] = input;
const nCard = new Set(NC.split(" "));
const mCard = new Set(MC.split(" "));
const result = [];
for (const card of mCard) {
  nCard.has(card) ? result.push("1") : result.push("0");
}
console.log(result.join(" "));