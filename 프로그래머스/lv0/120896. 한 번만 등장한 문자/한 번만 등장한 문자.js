function solution(s) {
    var answer = '';
    const a = new Set(s.split(""));
    for (let i = 0; i < a.length; i++) {
        console.log(a.value());
    }
    return answer;
}