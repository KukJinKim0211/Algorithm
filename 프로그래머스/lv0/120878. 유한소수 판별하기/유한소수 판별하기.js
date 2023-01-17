function solution(a, b) {
    var answer = 0;
    let bunsu = a;
    let bunmo = b;
    // 기약분수 구하기
    for (let i = 2; i <= bunsu; i++) {
        if (bunsu % i === 0 && bunmo % i === 0) {
            bunmo = bunmo / i;
            bunsu = bunsu / i;
        }
    }
    let i = 2;
    while (true) {
        if (bunmo % 2 === 0) {
            bunmo = bunmo / 2;
            continue;
        }
        if (bunmo % 5 === 0) {
            bunmo = bunmo / 5;
            continue;
        }
        break;
    }
    return bunmo === 1 ? 1 : 2;
}