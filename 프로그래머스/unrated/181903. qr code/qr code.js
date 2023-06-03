function solution(q, r, code) {
    return code.split("").filter((d, index) => index % q === r).join("");
}