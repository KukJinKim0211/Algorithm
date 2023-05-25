function solution(n, control) {
    var answer = 0;
    control.split("").forEach((d) => {
        if (d === 'w')
            answer += 1;
        else if (d === 's')
            answer -= 1;
        else if (d === 'd')
            answer += 10
        else
            answer -= 10
    })
    return answer + n;
}