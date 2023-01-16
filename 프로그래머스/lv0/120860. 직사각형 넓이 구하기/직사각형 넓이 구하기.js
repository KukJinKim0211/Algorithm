function solution(dots) {
    var answer = 1;
    let minX = 256;
    let maxX = -256;
    let minY = 256;
    let maxY = -256;
    for (d of dots) {
        maxX = Math.max(maxX, d[0]);
        minX = Math.min(minX, d[0]);
        maxY = Math.max(maxY, d[1]);
        minY = Math.min(minY, d[1]);
    }
    
    return Math.abs((maxX - minX) * (maxY - minY));
}