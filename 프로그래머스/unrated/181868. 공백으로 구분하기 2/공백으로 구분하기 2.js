function solution(my_string) {
    return my_string.split(" ").map((d) => { return d.trim() }).filter((d) => d != "");
}