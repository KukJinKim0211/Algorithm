function solution(cacheSize, cities) {
    var answer = 0;
    
    if (cacheSize === 0)
        return cities.length * 5
    
    let cache = []
    
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i].toUpperCase()
        answer += cache.includes(city) ? 1 : 5
        
        if (cache.includes(city)) {
            cache.splice(cache.indexOf(city), 1)
        } else if (cache.length === cacheSize) {
            cache.shift()
        }
        cache.push(city)
    }
    return answer;
}