function solution(arr) {
    var stk = [];
    let i = 0;
    while (true) {
        if (i >= arr.length)
            break;
        
        if (stk.length === 0) {
            stk.push(arr[i++]);
        } else if (stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i++])
        } else
            stk.pop()
    }
    return stk;
}