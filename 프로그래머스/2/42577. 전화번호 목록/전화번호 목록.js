function solution(phone_book) {
    const books = phone_book.sort()
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (books[i + 1].indexOf(books[i]) === 0)
            return false
    }
    
    return true
}