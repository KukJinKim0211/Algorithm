function solution(a, d, included) {
    let answer = 0;
    included.forEach((data, index) => {
        if (data) answer += a + d * index
    })
    return answer;
}