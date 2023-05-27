function solution(num_list) {
    const odd = [];
    const even = [];
    num_list.forEach((num) => {
        if (num % 2) 
            odd.push(num)
        else
            even.push(num)
    })
    return Number(odd.join("")) + Number(even.join(""));
}