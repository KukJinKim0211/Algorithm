function solution(strArr) {
    const arr = new Array(31).fill(0);
    strArr.forEach((d) => {
        arr[d.length]++;
    })
    return Math.max(...arr);
}