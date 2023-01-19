function solution(people, limit) {
    var answer = 0;
    const array = people.sort((a, b) => a - b);
    while (true) {
        if (array.length === 0) {
            return answer;
        }
        const people1 = array.pop();
        if (array[0] + people1 <= limit) {
            array.shift();
        }
        answer++;
    }
    return answer;
}