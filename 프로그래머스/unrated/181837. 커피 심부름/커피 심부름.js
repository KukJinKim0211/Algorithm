function solution(order) {
    var answer = 0;
    
    order.forEach((d) => {
        if (d.includes('americano') || d.includes('anything')) 
            answer += 4500
        else answer += 5000
    })
    return answer;
}