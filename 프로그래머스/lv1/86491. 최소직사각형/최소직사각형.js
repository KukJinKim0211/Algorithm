function solution(sizes) {
    var answer = 0;
    let min = 0, max = 0;
    for (d of sizes) {
        const [a, b] = [...d].sort((a, b) => a - b);
        min = Math.max(a, min);
        max = Math.max(b, max);
    }
    return min * max;
}