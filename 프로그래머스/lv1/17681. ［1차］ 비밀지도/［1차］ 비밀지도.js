function solution(n, arr1, arr2) {
    var answer = [];
    const newArr1 = [];
    const newArr2 = [];
    for (d of arr1) {
        newArr1.push(setPos(d.toString(2), n));
    }
    for (d of arr2) {
        newArr2.push(setPos(d.toString(2), n));
    }
    
    for (let i = 0; i < newArr1.length; i++) {
        let newAnswer = '';
        for (let j = 0; j < newArr1[i].length; j++) {
            if (newArr1[i][j] === '1' || newArr2[i][j] === '1')
                newAnswer += '#';
            else 
                newAnswer += ' ';
        }
        answer.push(newAnswer);
    }
    
    return answer;
}

function setPos(data, n) {
    let newData = '';
    if (data.length !== n) {
        newData += '0'.repeat(n - data.length);
    }
    newData += data;
    return newData;
}