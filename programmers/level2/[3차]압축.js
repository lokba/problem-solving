function solution(msg) {
  const dic = [...Array(26)].map((_, index) => String.fromCharCode(index + 65));
  const result = [];

  for (let i = 0; i < msg.length; i++) {
    let str = msg[i];

    for (let j = i + 1; ; j++) {
      if (dic.indexOf(str + msg[j]) === -1) {
        result.push(dic.indexOf(str) + 1);
        dic.push(str + msg[j]);
        break;
      } else {
        str += msg[j];
        i += 1;
      }
    }
  }

  return result;
}
