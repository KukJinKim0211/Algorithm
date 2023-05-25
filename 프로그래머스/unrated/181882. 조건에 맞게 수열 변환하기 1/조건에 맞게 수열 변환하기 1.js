function solution(arr) {
    return arr.map((d) => {
        if (d >= 50 && d % 2 === 0)
            return d / 2
        else if (d < 50 && d % 2)
            return d * 2
        else
            return d
    });
}