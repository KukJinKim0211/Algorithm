function solution(s) {
    const answer = []
    const array = []
    const data = s.slice(2, s.length - 2).split("},{")
    data.forEach((d) => {
        array.push(d.split(",").map((d2 => Number(d2))))
    })
    array.sort((a, b) => a.length - b.length)
    array.forEach((arr) => {
        arr.forEach((ar) => {
            if (!answer.includes(ar)) answer.push(ar)
        })
    })
    console.log(answer)
    return answer;
}