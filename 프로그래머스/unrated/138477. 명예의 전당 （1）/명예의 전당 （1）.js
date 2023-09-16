const numberSort = (arr) => {
    return arr.sort((a, b) => a - b)
}

function solution(k, score) {
    const answer = []
    var arr = [];
    score.forEach((s) => {
        if (arr.length < k) {
            arr = numberSort([...arr, s])
        } else {
            if (arr[0] <= s) {
                arr = numberSort([...arr.slice(1), s])
            }
        }
        answer.push(arr[0])
    })
    return answer;
}