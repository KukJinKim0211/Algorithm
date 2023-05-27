function solution(myString, pat) {
    var answer = 0;
    const newPat = pat.split("").map((d) => {
        return d === 'A' ? 'B' : 'A'
    })
    return Number(myString.includes(newPat.join("")));
}