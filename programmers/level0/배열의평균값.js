function solution(numbers) {
  const sum = numbers.reduce((sum, acc) => (sum += acc), 0);
  const length = numbers.length;

  return sum / length;
}
