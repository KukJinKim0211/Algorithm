function solution(arr, query) {
    var answer = [...arr];
    
    query.forEach((d, index) => {
        if (index % 2 === 0) {
            answer = answer.slice(0, d + 1)
        } else {
            answer = answer.slice(d)
        }
    })
    return answer;
}