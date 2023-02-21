function solution(elements) {
  const result = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;

    for (let j = 0; j < elements.length; j++) {
      sum += elements[(i + j) % elements.length];
      result.add(sum);
    }
  }

  return result.size;
}
