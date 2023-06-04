function solution(rank, attendance) {
    const entry = rank.filter((d, index) => attendance[index]).sort((a, b) => { return a - b}).slice(0, 3)
    return rank.indexOf(entry[0]) * 10000 + rank.indexOf(entry[1]) * 100 + rank.indexOf(entry[2]);
}