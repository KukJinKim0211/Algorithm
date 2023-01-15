function solution(keyinput, board) {
    var answer = [0, 0];
    const xRange = parseInt(board[0] / 2);
    const yRange = parseInt(board[1] / 2);
    keyinput.forEach((d) => {
        switch (d) {
            case 'left':
                if (answer[0] > -xRange)
                    answer[0]--;
                break;
            case 'right':
                if (answer[0] < xRange)
                    answer[0]++;
                break;
            case 'up':
                if (answer[1] < yRange)
                    answer[1]++;
                break;
            case 'down':
                if (answer[1] > -yRange)
                    answer[1]--;
                break;
        }
    })
    return answer;
}