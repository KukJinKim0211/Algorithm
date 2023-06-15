function solution(a, b, n) {
    var answer = 0;
    let count = n
    while (true) {
        if (count < a) {
            return answer
        }
        answer += parseInt(count / a) * b
        count = (parseInt(count / a) * b) + (count % a)
    }
    return answer;
}