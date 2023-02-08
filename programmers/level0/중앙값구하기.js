function solution(array) {
  const sorted = [...array].sort((a, b) => a - b);

  return sorted[Math.floor(array.length / 2)];
}
