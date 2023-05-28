function solution(arr, queries) {
    const answer = [...arr];
    queries.forEach((d) => {
        for (let i = d[0]; i <= d[1]; i++) {
            answer[i]++;
        }
    })
    return answer;
}