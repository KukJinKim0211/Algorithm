let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input
  .shift()
  .split(" ")
  .map((d) => +d);

const bfsVisit = new Array(N + 1).fill(false);
const dfsVisit = new Array(N + 1).fill(false);

const bfsAnswer = [];
const dfsAnswer = [];

const array = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

input.forEach((d) => {
  const [a, b] = d.split(" ").map((d) => +d);
  array[a][b] = array[b][a] = 1;
});

const dfs = (v) => {
  dfsVisit[v] = true;
  dfsAnswer.push(v);
  for (let i = 1; i <= N; i++) {
    if (array[v][i] === 1 && !dfsVisit[i]) {
      dfs(i);
    }
  }
};

const bfs = (v) => {
  const queue = [];

  queue.push(v);
  bfsAnswer.push(v);

  while (queue.length !== 0) {
    const num = queue.shift();
    bfsVisit[num] = true;
    for (let i = 1; i <= N; i++) {
      if (array[num][i] === 1 && !bfsVisit[i]) {
        bfsVisit[i] = true;
        queue.push(i);
        bfsAnswer.push(i);
      }
    }
  }
};

dfs(V);
bfs(V);

console.log(dfsAnswer.join(" "));
console.log(bfsAnswer.join(" "));