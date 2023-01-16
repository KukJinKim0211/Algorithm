function solution(n) {
    var answer = n;
    const oneCnt = n.toString(2).split("1").length;
    while (true) {
        answer++;
        if (answer.toString(2).split("1").length === oneCnt)
            return answer;
        
    }
    return answer;
}