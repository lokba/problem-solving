function solution(numbers, direction) {
  const _numbers = [...numbers];

  if (direction === "left") _numbers.push(_numbers.shift());
  else _numbers.unshift(_numbers.pop());

  return _numbers;
}
