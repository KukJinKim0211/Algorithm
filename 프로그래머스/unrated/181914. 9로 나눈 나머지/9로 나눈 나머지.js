function solution(number) {
    return number.split("").map((d) => +d).reduce((acc, cur) => { return acc += cur}, 0) % 9;
}