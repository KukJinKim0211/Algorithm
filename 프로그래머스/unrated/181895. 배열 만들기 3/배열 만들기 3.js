function solution(arr, intervals) {
    let answer = []
    for (let i = 0; i < intervals.length; i++) {
        answer = answer.concat(arr.slice(intervals[i][0], intervals[i][1] + 1))
    }
    return answer;
}