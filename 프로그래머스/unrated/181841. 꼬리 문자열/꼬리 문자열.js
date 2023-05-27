function solution(str_list, ex) {
    return str_list.filter((d) => d.indexOf(ex) === -1).join("");
}