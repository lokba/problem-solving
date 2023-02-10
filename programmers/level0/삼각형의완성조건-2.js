function solution(sides) {
  let [minValue, maxValue] = [Math.min(...sides), Math.max(...sides)];
  let result = 0;

  for (let i = 1; i < maxValue; i++) {
    if (i + minValue > maxValue) result++;
  }

  for (let i = maxValue; ; i++) {
    if (maxValue + minValue <= i) break;
    if (maxValue + minValue > i) result++;
  }

  return result;
}
