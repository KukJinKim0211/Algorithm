function solution(food) {
    var answer = '';
    let leftFood = ''
    food.slice(1).forEach((d, idx) => {
        leftFood += String(idx + 1).repeat(Number(d / 2))
    })
    
    return `${leftFood}0${leftFood.split("").reverse().join("")}`;
}