function solution(hp) {
  return [5, 3, 1].reduce((acc, cur) => {
    const quotient = Math.floor(hp / cur);
    acc += quotient;
    hp -= quotient * cur;

    return acc;
  }, 0);
}
