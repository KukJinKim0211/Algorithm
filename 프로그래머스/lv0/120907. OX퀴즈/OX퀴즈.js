function solution(quiz) {
    return quiz.map((d) => {
        const [a, oper, b, _, result] = d.split(" ")
        if (oper === '+') {
            const sum = Number(a) + Number(b)
            return Number(result) === sum ? 'O' : 'X'
        } else {
            const sub = Number(a) - Number(b)
            return Number(result) === sub ? 'O' : 'X'
        }
    });
}