function solution(k, tangerine) {
    const map = new Map()
    
    tangerine.forEach((d) => {
        map.set(d, map.get(d) ? map.get(d) + 1 : 1)
    })
    const arr = [...map].sort((a, b) => b[1] - a[1]).map((d) => d[1])
    
    let i = 0;
    let sum = 0;
    while (true) {
        if (sum >= k)
            return i
        
        sum += arr[i]
        
        i++
    }
}