function solution(arr, flag) {
    const answer = [];
    arr.forEach((d, index) => {
        if (flag[index]) {
            for (let i = 0; i < d; i++) {
                answer.push(d)
                answer.push(d)
            }
        }
        else {
            for (let i = 0; i < d; i++) {
                answer.pop()
            }
        }
        console.log(answer)
    })
    return answer;
}