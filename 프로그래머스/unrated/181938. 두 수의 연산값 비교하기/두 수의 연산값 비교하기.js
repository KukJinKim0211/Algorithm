function solution(a, b) {
    const ab = Number(String(a) + String(b))
    const ab2 = a * b * 2
    return ab > ab2 ? ab : ab2
}