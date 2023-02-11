function solution(arr) {
  const min = Math.min(...arr);
  const filtered = arr.filter((value) => value !== min);

  return filtered.length === 0 ? [-1] : filtered;
}
