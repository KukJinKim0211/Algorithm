function solution(myString) {
    return myString.split("").map((d) => {
        if (d.charCodeAt(0) < "l".charCodeAt(0))
            return "l"
        return d
    }).join("");
}