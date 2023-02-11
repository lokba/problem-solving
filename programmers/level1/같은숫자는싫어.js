function solution(arr) {
  const result = [];

  for (let item of arr) {
    if (result[result.length - 1] === item) continue;
    result.push(item);
  }

  return result;
}
