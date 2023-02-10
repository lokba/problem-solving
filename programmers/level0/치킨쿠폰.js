function solution(chicken) {
  let result = 0;

  while (chicken >= 10) {
    const coupon = Math.floor(chicken / 10);

    result += coupon;
    chicken = (chicken % 10) + coupon;
  }

  return result;
}
