function solution(s) {
  const pCount = s.match(/p/gi)?.length ?? 0;
  const yCount = s.match(/y/gi)?.length ?? 0;

  return pCount === yCount;
}
