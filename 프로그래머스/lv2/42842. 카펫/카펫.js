function solution(brown, yellow) {
    var answer = [];
    // Yellow 카펫을 기준으로 완전탐색
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i !== 0)
            continue;
        // i=x의 길이, j=y의 길이
        const j = yellow / i;
        
        if (((i + 2) * 2) + (j * 2) === brown) 
            return [Math.max(i + 2, j + 2), Math.min(i + 2, j + 2)];
    }
    return answer;
}