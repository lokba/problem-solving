function solution(s) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const str = s[i];

    if (map.has(str)) result.push(i - map.get(str));
    else result.push(-1);
    map.set(str, i);
  }

  return result;
}
