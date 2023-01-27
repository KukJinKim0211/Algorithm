const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((d) => +d);
for (let i = 1; i <= 30; i++) {
    if (input.indexOf(i) === -1)
        console.log(i);
}
