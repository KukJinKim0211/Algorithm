function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let up = (numer1 * denom2) + (numer2 * denom1)
    let down = denom1 * denom2
    
    for (let i = down; i > 1; i--) {
        if (down % i === 0 && up % i === 0) {
            up /= i
            down /= i
        }
    }
    return [up, down];
}