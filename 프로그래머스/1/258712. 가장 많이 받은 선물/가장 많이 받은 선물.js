function solution(friends, gifts) {
    const array = friends.map((f) => Array.from({length: friends.length}, () => 0))
    const result = Array.from({length: friends.length}, () => 0)
    
    gifts.map((d) => {
        const [send, receive] = d.split(" ")
        array[friends.indexOf(send)][friends.indexOf(receive)]++
    })
    
    const sendPoint = friends.map((_, i) => (array[i].reduce((a, b) => a + b, 0) - array.map((ar) => ar[i]).reduce((a, b) => a + b, 0)))
    
    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends.length; j++) {
            if (i === j)
                continue
            
            if (array[i][j] > array[j][i])
                result[i]++
            
            if (array[i][j] === array[j][i] && sendPoint[i] > sendPoint[j])
                result[i]++
        }
    }
    
    return Math.max(...result)
}