function solution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    const count = 약수개수(i);

    if (count > limit) result += power;
    else result += count;
  }

  return result;
}

function 약수개수(n) {
  let result = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) result += 1;
      else result += 2;
    }
  }

  return result;
}
