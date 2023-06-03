function solution(arr) {
    var answer = 0;
    let arr1 = []
    let arr2 = []
    let x = 0;
    
    const compareCheck = (arr1, arr2) => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i])
                return false
        }
        return true
    }
    while(true) {
        arr1 = arr1.length === 0 ? [...arr] : arr2
        arr2 = arr1.map((d) => {
            if (d >= 50 && d % 2 === 0) 
                return d / 2
            else if (d < 50 && d % 2 === 1)
                return d * 2 + 1
            else return d
        })
        if (compareCheck(arr1, arr2))
            return x
        x++
    }
    return answer;
}