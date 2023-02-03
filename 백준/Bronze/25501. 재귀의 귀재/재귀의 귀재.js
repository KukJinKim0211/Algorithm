let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function recursion(array, count) {
  if (array.length <= 1) {
    console.log(`1 ${count}`);
    return;
  }
  const newArray = [...array];
  const firstWord = newArray.shift();
  const lastWord = newArray.pop();
  if (firstWord === lastWord) {
    return recursion(newArray, count + 1);
  } else {
    console.log(`0 ${count}`);
    return;
  }
}

const N = parseInt(input.shift());
for (let i = 0; i < N; i++) {
  recursion(input[i].split(""), 1);
}