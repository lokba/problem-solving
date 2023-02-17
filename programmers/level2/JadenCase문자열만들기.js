function solution(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") result += s[i].toUpperCase();
    else result += s[i].toLowerCase();
  }

  return result;
}
