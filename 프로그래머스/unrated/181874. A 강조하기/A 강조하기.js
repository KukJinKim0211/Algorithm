function solution(myString) {
    return myString.split("").map((d) => {
        return d === 'a' || d === 'A' ? d.toUpperCase() : d.toLowerCase()
    }).join("");
}