function solution(money) {
  const value = Math.floor(money / 5_500);

  return [value, money - value * 5_500];
}
