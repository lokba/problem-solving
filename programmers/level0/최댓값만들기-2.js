function solution(numbers) {
  const _numbers = [...numbers];
  _numbers.sort((a, b) => a - b);

  return Math.max(
    _numbers[0] * _numbers[1],
    _numbers[_numbers.length - 1] * _numbers[_numbers.length - 2]
  );
}
