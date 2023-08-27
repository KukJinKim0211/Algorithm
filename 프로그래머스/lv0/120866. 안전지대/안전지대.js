function solution(board) {
    var answer = 0;
    
    const x = [-1, -1, -1, 0, 1, 1, 1, 0]
    const y = [-1, 0, 1, 1, 1, 0, -1, -1]

    let arr = [...board.map((d) => d)]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1) {
                for (let k = 0; k < x.length; k++) {
                    if (i + x[k] >= 0 && i + x[k] < arr.length && j + y[k] >= 0 && j + y[k] < arr.length && arr[i + x[k]][j + y[k]] === 0)
                        arr[i + x[k]][j + y[k]] = 2
                }
            }
        }
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === 0)
                count++;
        }
    }
    return count;
}