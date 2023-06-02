function solution(arr, queries) {
    const newArr = [...arr]
    queries.forEach((d) => {
        const [s, e, k] = d
        for(let i = s; i <= e; i++) {
            if (i % k === 0) {
                newArr[i]++
            }
        }
    })
    return newArr
}  