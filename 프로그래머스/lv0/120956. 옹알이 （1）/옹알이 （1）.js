function solution(babbling) {
    var answer = 0;
    const talk = ["aya", "ye", "woo", "ma"]
    babbling.forEach((item) => {
        let newItem = item
        for (let i = 0; i < talk.length; i++) {
            newItem = newItem.replace(talk[i], " ")
        }
        if (newItem.trim().length === 0)
            answer++;
    })
    return answer;
}