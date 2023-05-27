function solution(arr, n) {
    return arr.length % 2 ? arr.map((d, index) => {
        if (index % 2 === 0)
            return d + n
        return d
    }) : arr.map((d, index) => {
        if (index % 2)
            return d + n
        return d
    }) 
}