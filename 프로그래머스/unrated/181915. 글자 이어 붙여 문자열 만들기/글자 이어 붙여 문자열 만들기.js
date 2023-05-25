function solution(my_string, index_list) {
    let answer = [];
    index_list.forEach((li) => {
        answer.push(my_string.substring(li, li + 1))
    })
    return answer.join("");
}