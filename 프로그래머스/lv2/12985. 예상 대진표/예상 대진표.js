function solution(n,a,b)
{
    var answer = 0;
    const array = new Array(n).fill('X');
    array[a - 1] = 'O';
    array[b - 1] = 'O';
    let match = [...array];
    let cnt = 1;
    while (true) {
        const result = [];
        for (let i = 0; i < match.length / 2; i++) {
            const a = match[i * 2];
            const b = match[i * 2 + 1];
            if (a === 'O' && b === 'O') {
                return cnt;
            } else if (a === 'O' || b === 'O') {
                result.push('O');
            } else {
                result.push('X');
            }
        }
        match = [...result];
        cnt++;
    }
    return answer;
}