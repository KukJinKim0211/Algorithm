function solution(chicken) {
    var answer = 0;
    let chi = chicken;
    let coupon = chicken;
    while (true) {
        if (coupon < 10)
            return answer;
        
        answer += parseInt(coupon / 10);
        coupon = parseInt(coupon / 10) + parseInt(coupon % 10);
    }
    return answer;
}