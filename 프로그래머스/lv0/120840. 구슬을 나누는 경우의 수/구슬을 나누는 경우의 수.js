function solution(balls, share) {
    var answer = 0;
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(n) {
    let facto = BigInt(1)
    for(let i = n; i >= 2; i-- ) {
        facto *= BigInt(i)
    }
    return facto
}