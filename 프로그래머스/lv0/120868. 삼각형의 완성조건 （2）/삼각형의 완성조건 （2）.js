function solution(sides) {
    var answer = 0;
    const [a, b] = sides.sort((a, b) => a - b);
    // b가 가장 긴변일 때
    for (let i = b; i > b - a; i--) {
        answer++;
    }
    // c가 가장 긴변일 때
    for (let i = b + 1; i < b + a; i++) {
        answer++;
    }
    return answer;
}