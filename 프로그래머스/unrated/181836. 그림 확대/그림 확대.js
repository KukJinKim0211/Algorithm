function solution(picture, k) {
    const answer = []
    
    picture.forEach((d) => {
        const data  = (d.split("").map((d2) => {
            return d2.repeat(k)
        }))
        for (let i = 0; i < k; i++) {
            answer.push(data.join(""))
        }
    })
    return answer;
}