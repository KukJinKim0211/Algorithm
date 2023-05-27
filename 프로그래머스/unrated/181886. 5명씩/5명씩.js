function solution(names) {
    return names.filter((d, index) => index % 5 === 0);
}