function solution(n, words) {
    var answer = [];
    // 마지막 글자
    let lastWord = words[0].slice(words[0].length - 1);
    // 사용한 글자 배열
    const usedWord = [words[0]];
    for (let i = 1; i < words.length; i++) {
        // 이미 사용한 단어인지 체크
        if (usedWord.indexOf(words[i]) !== -1) {
            return result(n, i);
        }
        // 이전 단어로 끝말잇기 유효성 체크
        if (lastWord !== words[i].slice(0, 1)) {
            return result(n, i);
        }
        
        lastWord = words[i].slice(words[i].length - 1);
        usedWord.push(words[i]);
    }
    return [0, 0];
}

// n번째를 계산해서 걸린사람, 횟수 리턴
function result(n, index) {
    return [index % n + 1, parseInt(index / n) + 1];
}