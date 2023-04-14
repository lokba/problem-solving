function solution(A, B) {
  for (let i = 0; i < A.length; i++) {
    const slicing = A.slice(A.length - i) + A.slice(0, A.length - i);

    if (slicing === B) return i;
  }

  return -1;
}
