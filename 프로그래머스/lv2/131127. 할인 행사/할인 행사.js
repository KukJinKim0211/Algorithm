function solution(want, number, discount) {
    const wantArray = []
    want.forEach((d, idx) => {
        for (let i = 0; i < number[idx]; i++) {
            wantArray.push(d)
        }
    })
    const wantString = wantArray.sort().join("")
    var answer = 0;
    for (let i = 0; i <= discount.length - 10; i++) {
        const arr = discount.slice(i, i + 10)
        if (wantString === arr.sort().join(""))
            answer++;
    }
    return answer;
}