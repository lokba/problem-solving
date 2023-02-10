function solution(n) {
  let array = [1];

  for (let i = 1; ; i++) {
    array[i] = array[i - 1] * i;

    if (array[i] > n) return i - 1;
  }
}
