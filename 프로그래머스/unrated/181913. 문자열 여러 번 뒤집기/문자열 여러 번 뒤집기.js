function solution(my_string, queries) {
    let answer = my_string;
    queries.forEach((d) => {
        const [s, e] = d
        answer = answer.slice(0, s) + answer.slice(s, e + 1).split("").reverse().join("") + answer.slice(e + 1, answer.length)
    })
    return answer;
}