function solution(num_list) {
    const even = num_list.filter((d, index) => index % 2).reduce((acc, cur) => { return acc += cur}, 0)
    const odd = num_list.filter((d, index) => !(index % 2)).reduce((acc, cur) => { return acc += cur}, 0)
    return even >= odd ? even : odd;
}