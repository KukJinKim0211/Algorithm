function solution(arr) {
    const stk = [];
    let i = 0;
    while (true) {
        if (i >= arr.length)
            break;
        
        if (stk.length === 0)
            stk.push(arr[i])
        else if (stk[stk.length - 1] === arr[i])
            stk.pop()
        else
            stk.push(arr[i])
        
        i++
    }
    return stk.length === 0 ? [-1] : stk;
}