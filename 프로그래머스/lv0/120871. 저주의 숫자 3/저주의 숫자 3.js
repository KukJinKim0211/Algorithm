function solution(n) {
    var answer = 0;
    let cnt = 1;
    let num = 1;
    while (true) {
        if ((num + "").indexOf('3') === -1 && num % 3 !== 0) {
            cnt++;
        }
        
        if (n + 1 === cnt)
            return num;
        num++;
    }
    return answer;
}