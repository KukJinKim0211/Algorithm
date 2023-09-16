function solution(arr) {
    const col = arr.length
    const row = arr[0].length
    
    if (col === row)
        return arr
    else if (col > row) {
        return arr.map((ar) => {
            const add = []
            for (let i = 0; i < col - row; i++) {
                add.push(0)
            }
            return [...ar, ...add]
        })
    } else {
        const add = []
        for (let i = 0; i < row - col; i++) {
            const add2 = []
            for (let j = 0; j < row; j++) {
                add2.push(0)
            }
            add.push(add2)
        }
        return [...arr, ...add]
    }
}