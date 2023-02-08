function solution(price) {
  let rate = 0;

  if (price >= 500_000) rate = 0.2;
  else if (price >= 300_000) rate = 0.1;
  else if (price >= 100_000) rate = 0.05;

  return Math.floor(price * (1 - rate));
}
