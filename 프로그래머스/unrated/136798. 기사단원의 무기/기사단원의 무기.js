function solution(number, limit, power) {
    var answer = 1;
    // 기사 수만큼 loop
    for (let i = 2; i <= number; i++) {
        // 약수
        let num = Math.sqrt(i) === parseInt(Math.sqrt(i)) ? 1 : 0; 

        // 약수 갯수 구하기
        for (let j = 1; j < Math.sqrt(i); j++) {
            if (i % j === 0)
                num += 2;
        }
        answer += num > limit ? power : num;    
    }
    return answer;
}