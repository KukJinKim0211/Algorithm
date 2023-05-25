function solution(num_list) {
    return num_list.reduce((arr, cur) => {return arr *= cur}, 1) < Math.pow(num_list.reduce((arr, cur) => {return arr += cur}, 0), 2) ? 1 : 0;
}