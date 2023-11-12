function solution(k, dungeons) {
    var answer = -1;
    const visit = Array(dungeons.length).fill(false)
    
    const dfs = (piro, count) => {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visit[i] && piro >= dungeons[i][0]) {
                visit[i] = true
                dfs(piro - dungeons[i][1], count + 1)
                visit[i] = false
            }
        }
        answer = Math.max(answer, count)
    }
    
    dfs(k, 0)
    return answer;
}