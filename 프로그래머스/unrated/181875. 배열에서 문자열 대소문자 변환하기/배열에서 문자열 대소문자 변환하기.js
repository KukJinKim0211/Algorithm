function solution(strArr) {
    return strArr.map((d, index) => {
      return index % 2 ? d.toUpperCase() : d.toLowerCase()
    });
}