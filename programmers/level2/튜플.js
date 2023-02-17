function solution(s) {
  const sliced = s.slice(2, s.length - 2);
  const splitted = sliced.split("},{").map((v) => v.split(","));
  const sorted = splitted.sort((a, b) => (a.length > b.length ? 1 : -1));

  const result = [];

  for (let list of sorted) {
    result.push(...list.filter((item) => !result.includes(item)));
  }

  return result.map(Number);
}
