function solution(numbers) {
    var answer = [];
    const array = numbers.sort((a , b) => a - b);
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const sum = array[i] + array[j];
            if (answer.indexOf(sum) === -1) {
                answer.push(sum);
            }
        }
    }
    return answer.sort((a, b) => a - b);
}