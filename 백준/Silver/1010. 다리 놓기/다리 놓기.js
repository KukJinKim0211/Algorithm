let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = parseInt(input.shift());
let answer = [];
for (let tc = 0; tc < T; tc++) {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((d) => +d);
  const arr = Array.from(Array(30), () => Array(30).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (i === j) {
        arr[i][j] = 1;
      } else if (i === 1) {
        arr[i][j] = j;
      } else {
        let num = 0;
        for (let k = 1; k < j; k++) {
          num += arr[i - 1][k];
        }
        arr[i][j] = num;
      }
    }
  }
  answer.push(arr[N][M]);
}
console.log(answer.join("\n"));