let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const stack = [];
const answer = [];

input.shift();

while (input.length) {
  const order = input.shift();
  switch (order) {
    case "pop":
      if (stack.length) answer.push(stack.pop());
      else answer.push("-1");
      break;
    case "top":
      if (stack.length) answer.push(stack[stack.length - 1]);
      else answer.push("-1");
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      if (stack.length) answer.push("0");
      else answer.push("1");
      break;
    default:
      stack.push(order.split(" ")[1]);
      break;
  }
}

console.log(answer.join("\n"));