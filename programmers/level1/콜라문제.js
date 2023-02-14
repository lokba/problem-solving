function solution(a, b, n) {
  let total = n;
  let answer = 0;

  while (total >= a) {
    const received = Math.floor(total / a) * b;

    total = (total % a) + received;
    answer += received;
  }

  return answer;
}
