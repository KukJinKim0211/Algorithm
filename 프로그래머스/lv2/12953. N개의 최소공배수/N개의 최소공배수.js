function solution(arr) {
    var answer = Math.max(...arr);
    while (true) {
        let flag = true
        for (let i = 0; i < arr.length; i++) {
            if (Math.max(arr[i], answer) % Math.min(arr[i] % answer) !== 0) {
                flag = false
                break;
            }
        }
        if (flag)
            return answer
        
        answer++;
    }
    return answer;
}