function solution(id_pw, db) {
    var answer = '';
    for (d of db) {
        if (d[0] === id_pw[0]) {
            console.log(typeof d[1], typeof id_pw[1]);
            if (d[1] === id_pw[1]) {
                return 'login';
            }
            else {
                return 'wrong pw';
            }
        }
    }
    return 'fail';
}