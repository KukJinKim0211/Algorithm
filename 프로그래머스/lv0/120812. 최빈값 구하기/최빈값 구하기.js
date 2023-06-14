function solution(array) {
    if (array.length === 1)
        return array[0]
    
    const map = new Map()
    array.forEach((d) => {
        map.set(d, map.get(d) ? map.get(d) + 1 : 1)
    })
    const arr = Array.from(map).sort((a, b) => b[1] - a[1])
    if (arr.length === 1)
        return arr[0][0]
    
    if (arr[0][1] === arr[1][1])
        return -1
    else
        return arr[0][0]
}