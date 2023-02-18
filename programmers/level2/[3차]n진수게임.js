function solution(n, t, m, p) {
  let str = "";

  for (let i = 0; ; i++) {
    str += i.toString(n);
    if (str.length >= t * m) break;
  }

  str = str.toUpperCase();

  let result = "";

  for (let i = 0; i < t; i++) {
    result += str[m * i + p - 1];
  }

  return result;
}
