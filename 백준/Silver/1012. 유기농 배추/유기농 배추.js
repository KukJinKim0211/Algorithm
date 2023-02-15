let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = parseInt(input.shift());

let array;
let visit;
let M;
let N;
let K;

for (let tc = 0; tc < T; tc++) {
  let answer = 0;
  [M, N, K] = input
    .shift()
    .split(" ")
    .map((d) => +d);

  array = Array.from(Array(M), () => new Array(N).fill(0));
  visit = Array.from(Array(M), () => new Array(N).fill(0));

  for (let i = 0; i < K; i++) {
    const [a, b] = input
      .shift()
      .split(" ")
      .map((d) => +d);
    array[a][b] = 1;
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (array[i][j] === 1 && visit[i][j] === 0) {
        DFS(i, j);
        answer++;
      }
    }
  }
  console.log(answer);
}

function DFS(x, y) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  visit[x][y] = 1;
  for (let i = 0; i < 4; i++) {
    const ax = x + dx[i];
    const ay = y + dy[i];
    if (ax >= 0 && ay >= 0 && ax < M && ay < N) {
      if (array[ax][ay] === 1 && visit[ax][ay] === 0) {
        DFS(ax, ay);
      }
    }
  }
}