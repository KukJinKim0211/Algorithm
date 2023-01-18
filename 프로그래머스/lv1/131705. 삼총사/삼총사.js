function solution(number) {
    var answer = 0;
    const array = number.sort((a, b) => a - b);
    
    const combi = (arr, start) => {
        if (arr.length === 3) {
            answer += arr.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }
        
        for (let i = start; i < array.length; i++) {
            combi([...arr, array[i]], i + 1);
        }
    }
    combi([], 0);
    return answer;
}
         