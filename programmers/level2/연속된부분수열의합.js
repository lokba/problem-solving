function solution(sequence, k) {
  const list = [];

  for (let i = 0; i < sequence.length; i++) {
    list.push(sequence[i] + (list[i - 1] ?? 0));
  }

  let [left, right] = [0, 0];
  let minLength = Infinity;
  let answer = [];

  while (left <= right && right < sequence.length) {
    const sum = list[right] - (list[left - 1] ?? 0);

    if (sum < k) right++;
    else if (sum > k) left++;
    else {
      if (right - left - 1 < minLength) {
        minLength = right - left - 1;
        answer = [left, right];
      }

      left++;
    }
  }

  return answer;
}
