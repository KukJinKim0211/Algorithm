function solution(s) {
    var answer = 0;
    const array = s.split("");
    let word = '';
    // 지정단어 카운트
    let count1 = 0;
    // 지정단어가 아닌 카운트
    let count2 = 0;
    array.forEach((d) => {
        // 새로운 지정단어 추출
        if (word === '')
            word = d;
        
        word === d ? count1++ : count2++;
        
        // 조건에 맞을 시
        if (count1 === count2) {
            word = '';
            count1 = 0;
            count2 = 0;
            answer++;
        }
    });
    if (word.length > 0)
        answer++;
    return answer;
}