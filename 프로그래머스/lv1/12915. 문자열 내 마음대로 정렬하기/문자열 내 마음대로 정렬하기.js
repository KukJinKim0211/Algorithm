function solution(strings, n) {
    var answer = [];
    strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        else if (b[n] > a[n]) return -1;
        else {
            if (a > b) return 1;
            else return -1;
            return 0;
        }
    })
    return strings;
}