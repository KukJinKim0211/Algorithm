function solution(numLog) {
    const arr = []
    for (let i = 0; i < numLog.length - 1; i++) {
        if (numLog[i] + 1 === numLog[i + 1])
            arr.push('w')
        else if (numLog[i] - 1 === numLog[i + 1])
            arr.push('s')
        else if (numLog[i] + 10 === numLog[i + 1])
            arr.push('d')
        else
            arr.push('a')
    }
    return arr.join("");
}