function solution(a, b) {
    const dateFormat = `2016-${a >= 10 ? a : '0' + a}-${b >= 10 ? b : '0' + b}`
    const date = new Date(dateFormat)
    switch (date.getDay()) {
        case 1: return 'MON'
        case 2: return 'TUE'
        case 3: return 'WED'
        case 4: return 'THU'
        case 5: return 'FRI'
        case 6: return 'SAT'
        case 0: return 'SUN'
    }
}