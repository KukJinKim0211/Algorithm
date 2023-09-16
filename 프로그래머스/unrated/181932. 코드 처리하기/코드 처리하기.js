function solution(code) {
    var answer = '';
    let mode = 0;
    code.split("").forEach((c, idx) => {
        if (!mode) {
            if (c === '1')
                mode = 1
            else {
                if (idx % 2 === 0) answer += c
            }
        } else {
            if (c === '1')
                mode = 0
            else {
                if (idx % 2 === 1) answer += c
            }
        }
    })
    return answer || 'EMPTY';
}