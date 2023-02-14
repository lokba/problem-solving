function solution(array, commands) {
  const result = [];

  for (let [i, j, k] of commands) {
    const slicing = array.slice(i - 1, j);
    const sorted = [...slicing].sort((a, b) => (a > b ? 1 : -1));

    result.push(sorted[k - 1]);
  }

  return result;
}
