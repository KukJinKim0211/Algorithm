function solution(arr) {
    const answer = [];
    arr.forEach((d) => {
        for (let i = 0; i < d; i++) {
            answer.push(d)
        }
    })
    return answer;
}