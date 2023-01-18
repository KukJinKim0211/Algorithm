function solution(score) {
    var answer = [];
    // 등수 매길 배열
    const grade = new Array(score.length).fill(1);
    // 평균점수 산출한 배열
    const avg = score.map((d) => (d[0] + d[1]) / 2);
    for (let i = 0; i < grade.length; i++) {
        for (let j = 0; j < grade.length; j++) {
            if (avg[i] > avg[j]) grade[j]++;
        }
    }
    return grade;
}