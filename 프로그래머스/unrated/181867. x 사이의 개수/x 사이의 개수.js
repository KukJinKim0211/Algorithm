function solution(myString) {
    return myString.split("x").map((d) => {
        return d.length
    });
}