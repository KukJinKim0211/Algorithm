function solution(my_string, m, c) {
    let answer = '';
    const arr = my_string.split("")
    for (let i = 0; i < my_string.length / m; i++) {
        answer += arr[c + i * m - 1]
    }
    return answer;
}