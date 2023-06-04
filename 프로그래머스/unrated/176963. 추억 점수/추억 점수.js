function solution(name, yearning, photo) {
    const arr = []
    photo.forEach((d) => {
        let count = 0;
        d.forEach((d1) => {
            if (name.indexOf(d1) !== -1) {
                count += yearning[name.indexOf(d1)]
            }
        })
        arr.push(count)
    })
    return arr
}