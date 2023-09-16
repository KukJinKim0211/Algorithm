function solution(elements) {
    var answer = 0;
    const count = [...elements]
    const arr = [...elements, ...elements]
    for (let i = 2; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            count.push([...arr].slice(j, j + i).reduce((acc, cur) => { return acc += cur; }))
        }
    }
    return [...new Set(count)].length;
}