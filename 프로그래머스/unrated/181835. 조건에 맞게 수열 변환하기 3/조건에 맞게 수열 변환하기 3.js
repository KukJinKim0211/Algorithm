function solution(arr, k) {
    return arr.map((d) => {
        return k % 2 ? d * k : d + k
    });
}