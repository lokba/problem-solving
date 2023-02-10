function solution(n) {
  let result = 0;

  for (let i = 4; i <= n; i++) {
    let 약수 = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) 약수 += 1;
        else 약수 += 2;
      }

      if (약수 >= 3) {
        result++;
        break;
      }
    }
  }

  return result;
}
