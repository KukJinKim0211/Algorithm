function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (sum, cnt) => {
        if (cnt === numbers.length) {
            if (sum === target)
                answer++;
            return
        }
        
        dfs(sum + numbers[cnt], cnt + 1)
        dfs(sum - numbers[cnt], cnt + 1)
    }
    
    dfs(0, 0)
    
    return answer
}