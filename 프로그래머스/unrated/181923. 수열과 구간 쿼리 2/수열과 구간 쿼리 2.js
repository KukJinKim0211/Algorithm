function solution(arr, queries) {
    const answer = queries.map((d) => {
        const [s, e, k] = d;
        const array = arr.slice(s, e + 1)
        return array.filter((d1) => d1 > k).sort((a, b) => a - b)[0]
    })
    return answer.map((d) => d ? d : -1);
}