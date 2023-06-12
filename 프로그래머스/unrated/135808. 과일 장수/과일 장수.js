function solution(k, m, score) {
    const arr = [...score].sort((a, b) => b - a)
    let answer = 0;
    for (let i = 0; i <= score.length / m - 1; i++) {
        answer += arr[i * m + m - 1] * m
    }
    return answer;
}