function solution(a, b, c, d) {
    var answer = 0;
    
    if (a === b && b === c && c === d) {
        return 1111 * a
    }
    
    if ( (a === b && b === c) ) {
        return (10 * a + d) * (10 * a + d)
    }
    
    if ( (a === b && b === d) ) {
        return (10 * a + c) * (10 * a + c)
    }
    
    if ( (a === c && c === d) ) {
        return (10 * a + b) * (10 * a + b)
    }
    
    if ( (b === c && c === d) ) {
        return (10 * b + a) * (10 * b + a)
    } 
    
    if ( (a === b && c === d) ) {
        return (a + c) * Math.abs(a - c)
    }
    
    if ( (a === c && b === d) ) {
        return (a + b) * Math.abs(a - b)
    }
    
    if ( (a === d && b === c) ) {
        return (a + b) * Math.abs(a - b)
    }
    
    if ( a === b ) {
        return c * d
    }
    
    if ( a === c) {
        return b * d
    }
    
    if ( a === d ) {
        return b * c
    }
    
    if ( b === c ) {
        return a * d
    }
    
    if ( b === d ) {
        return a * c
    }
    
    if ( c === d ) {
        return a * b
    }

    
    return Math.min(a, b, c, d);
}