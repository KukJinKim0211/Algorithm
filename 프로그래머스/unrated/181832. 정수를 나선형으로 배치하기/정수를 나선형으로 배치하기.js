function solution(n) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(new Array(n).fill(0))
    }
    let bang = 0;
    let count = 1;
    
    let depth = 0;
    
    while (true) {
        if (count > n * n)
            return answer
        
        if (bang === 0) {
            for (let i = depth; i < n - depth; i++) {
                answer[0 + depth][i] = count++
            }
        }
        else if (bang === 1) {
            for (let i = depth + 1; i < n - depth; i++) {
                answer[i][n - depth - 1] = count++
            }
        }
        else if (bang === 2) {
            for (let i = n - depth - 2; i >= depth; i--) {
                answer[n - depth - 1][i] = count++;
            }
        }
        else if (bang === 3) {
            for (let i = n - depth - 2; i > depth; i--) {
                answer[i][0 + depth] = count++;
            }
        }
        if (bang === 3) {
            bang = 0;
            depth++
        } else
            bang++
    }
    
    return answer;
}