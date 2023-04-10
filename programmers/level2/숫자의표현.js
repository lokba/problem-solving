function solution(n) {
  let [left, right] = [0, 0];
  let answer = 0;

  while (left <= right && right < n) {
    const sum = ((right - left + 1) * (right + left + 2)) / 2;

    if (sum < n) right++;
    else {
      if (sum === n) answer++;
      left++;
    }
  }

  return answer;
}
