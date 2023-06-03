function solution(arr, k) {
    const set = new Set(arr)
    const newArr = [...set]
    if (newArr.length >= k)
        return newArr.slice(0, k)
    else {
        return newArr.concat(Array(k - newArr.length).fill(-1))
    }
}