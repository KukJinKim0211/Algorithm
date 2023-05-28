function solution(myStr) {
    var answer = myStr.replaceAll("a", " ").replaceAll("b", " ").replaceAll("c", " ").split(" ").map((d) => { return d.trim()}).filter((d) => { return d });
    return answer.length ? answer : ['EMPTY'];
}