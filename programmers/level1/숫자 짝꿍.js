function solution(X, Y) {
  const xobj = {};
  const yobj = {};

  for (let ch of X) {
    if (!xobj[ch]) xobj[ch] = 1;
    else xobj[ch]++;
  }

  for (let ch of Y) {
    if (!yobj[ch]) yobj[ch] = 1;
    else yobj[ch]++;
  }

  const intersection = [];

  for (let i = 9; i >= 0; i--) {
    if (!xobj[i] || !yobj[i]) continue;
    for (let j = 0; j < Math.min(xobj[i], yobj[i]); j++) intersection.push(i);
  }

  if (intersection.length === 0) return "-1";
  if (intersection[0] === 0) return "0";
  return intersection.join("");
}
