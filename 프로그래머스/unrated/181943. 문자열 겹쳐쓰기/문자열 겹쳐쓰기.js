function solution(my_string, overwrite_string, s) {
    const lastWorld = overwrite_string.length + s <= my_string.length ? my_string.slice(overwrite_string.length + s) : ''
    return my_string.slice(0, s) + overwrite_string + lastWorld;
}