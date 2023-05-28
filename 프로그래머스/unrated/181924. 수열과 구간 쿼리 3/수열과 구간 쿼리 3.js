function solution(arr, queries) {
    const answer = [...arr]
    queries.forEach((d) => {
        const temp = answer[d[0]]
        answer[d[0]] = answer[d[1]]
        answer[d[1]] = temp
    })
    return answer;
}