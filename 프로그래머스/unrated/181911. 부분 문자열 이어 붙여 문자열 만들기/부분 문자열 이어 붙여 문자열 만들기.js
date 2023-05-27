function solution(my_strings, parts) {
    return my_strings.map((d, index) => {
        return d.substring(parts[index][0], parts[index][1] + 1)
    }).join("");
}