function solution(maps) {
    let answer = 100000;
    
    const yLen = maps.length;
    const xLen = maps[0].length;
    
    const yGoal = yLen - 1;
    const xGoal = xLen - 1;
    
    const queue = [[0, 0, 1]]
    
    const map = maps.map((d) => [...d])
    
    while (queue.length) {
        const [y, x, count] = queue.shift();
        
        if (y < 0 || y >= yLen) continue
        if (x < 0 || x >= xLen) continue
        if (map[y][x] === 0) continue
        
        if (y === yGoal && x === xGoal) return count
        
        map[y][x] = 0
        queue.push([y - 1, x, count + 1])
        queue.push([y, x + 1, count + 1])
        queue.push([y + 1, x, count + 1])
        queue.push([y, x - 1, count + 1])
    }
    return -1
}