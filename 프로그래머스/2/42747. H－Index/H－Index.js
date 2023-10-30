function solution(citations) {
    const array = citations.sort((a, b) => b - a)
    const cnt = array.length
    let answer = 0
    for (let i = 0; i < cnt; i++) {
        if (i < array[i])
            answer++
        else break
    }
    return answer
}