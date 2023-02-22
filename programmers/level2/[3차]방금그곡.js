function solution(m, musicInfos) {
  m = convertMelody(m);
  const result = [];

  for (let musicInfo of musicInfos) {
    let [start, end, title, melody] = musicInfo.split(",");
    const 시간차이 = get시간차이(start, end);

    melody = convertMelody(melody)
      .repeat(Math.ceil((시간차이 * 2) / melody.length))
      .slice(0, 시간차이 * 2);

    if (melody.indexOf(m) !== -1) result.push([title, 시간차이]);
  }

  result.sort((a, b) => (a[1] > b[1] ? -1 : 1));
  return result.length ? result[0][0] : "(None)";
}

function get시간차이(a, b) {
  const [hour1, minute1] = a.split(":").map(Number);
  const [hour2, minute2] = b.split(":").map(Number);

  return hour2 * 60 + minute2 - (hour1 * 60 + minute1);
}

function convertMelody(melody) {
  let result = "";

  for (let i = 0; i < melody.length; i++) {
    if (melody[i + 1] === "#") {
      result += melody[i] + melody[i + 1];
      i += 1;
    } else result += melody[i] + "0";
  }

  return result;
}
