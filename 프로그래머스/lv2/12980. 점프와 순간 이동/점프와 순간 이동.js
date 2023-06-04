function solution(n)
{
    let N = n;
    let move = 0;
    while (true) {
        if (N === 1) {
            return move + 1
        }
        
        if (N % 2 === 1) {
            move++;
            N--;
        } else {
            N /= 2
        }
    }
}