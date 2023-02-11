function solution(number1, denom1, number2, denom2) {
  let [분자, 분모] = [number1 * denom2 + number2 * denom1, denom1 * denom2];
  let 최대공약수 = 1;

  for (let i = 2; i <= Math.min(분자, 분모); i++) {
    if (분자 % i === 0 && 분모 % i === 0) 최대공약수 = i;
  }

  return [분자 / 최대공약수, 분모 / 최대공약수];
}
