function solution(num_list, n) {
    return num_list.filter((d, index) => 
        index === 0 || index % n === 0
    );
}