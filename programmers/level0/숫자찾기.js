function solution(num, k) {
  const pos = [...String(num)].indexOf(String(k));

  return pos !== -1 ? pos + 1 : -1;
}
