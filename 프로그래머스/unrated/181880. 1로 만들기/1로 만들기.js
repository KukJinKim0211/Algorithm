function solution(num_list) {
    let answer = 0;
    num_list.forEach((d) => {
        let num = d;
        while (true) {
            if (num === 1)
                break;
            if (num % 2 === 0)
                num /= 2
            else
                num = (num - 1) / 2
            
            answer++;
        }
    })
    return answer;
}