function solution(M, N) {
    var answer = 0;
    return M < N ? (M - 1) + (N - 1) * M : (N - 1) + (M - 1) * N;
}