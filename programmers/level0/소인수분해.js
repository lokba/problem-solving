function solution(n) {
  let set = new Set();
  let divider = 2;

  while (n !== 1) {
    if (n % divider === 0) {
      set.add(divider);
      n = n / divider;
    } else divider++;
  }

  return [...set];
}
