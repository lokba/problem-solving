function solution(s, n) {
  let result = "";

  for (let str of s) {
    if (str === " ") {
      result += " ";
      continue;
    }

    const charCode = str.charCodeAt(0);
    let nextCharCode = charCode + n;

    if ((charCode <= 90 && nextCharCode > 90) || nextCharCode > 122)
      nextCharCode -= 26;

    result += String.fromCharCode(nextCharCode);
  }

  return result;
}
