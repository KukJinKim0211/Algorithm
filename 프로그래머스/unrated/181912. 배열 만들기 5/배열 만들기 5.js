function solution(intStrs, k, s, l) {
    
    return intStrs.map((d) => { return Number(d.substring(s, s + l))}).filter((d) => {
        return Number(d) > k 
    })
}