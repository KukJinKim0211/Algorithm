function solution(polynomial) {
    const answer = []
  const data = polynomial.split(" + ")
  let dx = 0
  let num = 0
  data.forEach((d) => {
      if (d.includes('x')) {
          dx += d.split('x')[0] ? parseInt(d.split('x')[0]) : 1
      } else {
          num += parseInt(d)
      }
  })
    
    if (dx) answer.push(`${dx === 1 ? "" : dx}x`);
  if (num) answer.push(num);
    
    return answer.join(" + ")
}