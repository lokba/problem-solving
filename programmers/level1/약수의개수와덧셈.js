function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    sum += Math.sqrt(i) === Math.floor(Math.sqrt(i)) ? -i : i;
  }

  return sum;
}
