function solution(arr) {
    const index = arr.indexOf(2)
    const lastIndex = arr.lastIndexOf(2)
    
    if (index === -1)
        return [-1]
    
    return arr.slice(index, lastIndex + 1);
}