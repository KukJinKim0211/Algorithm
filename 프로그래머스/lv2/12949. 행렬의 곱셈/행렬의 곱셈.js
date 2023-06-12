function solution(arr1, arr2) {
    const array = []
    for (let i = 0; i < arr1.length; i++) {
        const array2 = []
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            let k = 0;
            while (true) {
                if (k >= arr1[0].length)
                    break;
                sum += arr1[i][k] * arr2[k][j]
                k++;
            }
            array2.push(sum)
        }
        array.push(array2)
    }
    return array;
}