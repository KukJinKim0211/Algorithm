function solution(s) {
    const left = ['(', '[', '{']
    const right = [')', ']', '}']
    const arr = [...s]
    const map = new Map()
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        arr.push(arr.shift())
        const stack = []
        let check = true
        for (let i = 0; i < arr.length; i++) {
            if (!check)
                break;
            if (left.includes(arr[i])) {
                stack.push(arr[i])
            }
            else {
                if (!stack.length) {
                    check = false
                }
                if (right.indexOf(arr[i]) !== left.indexOf(stack[stack.length - 1])){
                    check = false
                }
                else {
                    stack.pop()
                }
            }
        }
        if (check && stack.length === 0) {
            answer++;
        }
    }
    return answer
}