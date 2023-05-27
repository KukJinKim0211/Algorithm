function solution(arr, delete_list) {
    return arr.filter((d) => !delete_list.includes(d));
}