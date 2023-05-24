function solution(num_str) {
    var answer = 0;
    return num_str.split("").map((d) => +d).reduce((acc, cur) => {return acc += cur}, 0);
}