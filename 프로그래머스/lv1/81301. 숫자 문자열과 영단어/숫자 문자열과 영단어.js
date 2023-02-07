function solution(s) {
  var answer = 0;
  let data = s;
  const array = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  while (isNaN(data)) {
    for (let i = 0; i < 10; i++) {
      data = data.replace(array[i], i);
    }
  }
  return parseInt(data);
}