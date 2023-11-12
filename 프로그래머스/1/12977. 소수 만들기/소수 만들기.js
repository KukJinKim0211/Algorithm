function solution(nums) {
    var answer = 0;
    const array = []
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                array.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    console.log(array)
    for (let i of array) {
        let cnt = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                cnt++;
                break;
            }
        }
        if (cnt === 0)
            answer++;
    }
    
    return answer;
}