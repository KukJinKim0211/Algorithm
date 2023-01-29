let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((d) => +d);

const sosu = [2];
for (let i = 3; i < 10000; i = i + 2) {
    let isSosu = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isSosu = false;
            break;
        }
    }
    if (isSosu)
        sosu.push(i);
}

const count = input.shift();
for (let i = 0; i < count; i++) {

    let j = 0;
    let sosu1 = 0;
    let sosu2 = 0;
    while(true) {
        if (sosu[j] > input[i] / 2) {
            console.log(sosu1, sosu2);
            break;
        }

        const num = input[i] - sosu[j];
        if (sosu.indexOf(num) !== -1) {
            sosu1 = sosu[j];
            sosu2 = num;
        }
        
        j++;
    }
}