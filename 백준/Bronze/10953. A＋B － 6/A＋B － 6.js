let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = input.shift();
for (d of input) {
  const [a, b] = d.split(",").map((d) => +d);
  console.log(a + b);
}