function solution(before, after) {
    const array1 = before.split("").sort();
    const array2 = after.split("").sort();
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i])
            return 0;
    }
    return 1;
}