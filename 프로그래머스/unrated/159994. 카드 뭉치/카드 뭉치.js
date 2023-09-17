function solution(cards1, cards2, goal) {
    let newCard1 = [...cards1]
    let newCard2 = [...cards2]
    
    for (let i = 0; i < goal.length; i++) {
        if (newCard1.length > 0 && goal[i] === newCard1[0]) {
            newCard1 = [...newCard1.slice(1)]
            continue
        } else if (newCard2.length > 0 && goal[i] === newCard2[0]) {
            newCard2 = [...newCard2.slice(1)]
            continue
        }
        return 'No'
    }
    return 'Yes';
}