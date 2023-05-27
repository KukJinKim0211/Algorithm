function solution(n) {
    const answer = [n]
    let num = n;
    while (true) {
        if (num === 1)
            break;
        if (num % 2) {
            num = 3 * num + 1
        }
        else {
            num /= 2
        }
        answer.push(num)
    }
    return answer;
}