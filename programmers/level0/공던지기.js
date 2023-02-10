function solution(numbers, k) {
  if (numbers.length % 2 === 0) {
    let _numbers = [...numbers].filter((_, index) => index % 2 === 0);

    return _numbers[(k - 1) % (numbers.length / 2)];
  } else {
    let _numbers = [...numbers]
      .filter((_, index) => index % 2 === 0)
      .concat([...numbers].filter((_, index) => index % 2 !== 0));

    return _numbers[(k - 1) % numbers.length];
  }
}
