function solution(lines) {
    var answer = 0;
    
    const arr = Array(301).fill(0)
    
    for (let i = 0; i <= 2; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++) {
            arr[j + 100]++;
        }
    }
    arr.forEach((ar) => {
        if (ar >= 2) {
            answer++;
        }
    })
    return answer;
}