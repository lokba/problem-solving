function solution(price, money, count) {
  const total = (price * count * (count + 1)) / 2;

  return money > total ? 0 : Math.abs(money - total);
}
