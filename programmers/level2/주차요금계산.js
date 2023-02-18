function solution(fees, records) {
  const 입차테이블 = new Map();
  const 시간테이블 = new Map();
  const 요금테이블 = new Map();

  for (let record of records) {
    const [시각, 번호, 내역] = record.split(" ");

    if (내역 === "IN") 입차테이블.set(번호, 시각);
    else {
      const 입출차차이 = get입출차차이(입차테이블.get(번호), 시각);
      입차테이블.delete(번호);
      시간테이블.set(번호, (시간테이블.get(번호) ?? 0) + 입출차차이);
    }
  }

  for (let [번호, 입차시각] of 입차테이블) {
    const 입출차차이 = get입출차차이(입차시각, "23:59");
    시간테이블.set(번호, (시간테이블.get(번호) ?? 0) + 입출차차이);
  }

  const [기본시간, 기본요금, 단위시간, 단위요금] = fees;

  for (let [번호, 총시간] of 시간테이블) {
    const 요금 =
      총시간 <= 기본시간
        ? 기본요금
        : 기본요금 + Math.ceil((총시간 - 기본시간) / 단위시간) * 단위요금;
    요금테이블.set(번호, (요금테이블.get(번호) ?? 0) + 요금);
  }

  return [...요금테이블]
    .sort((a, b) => (Number(a[0]) > Number(b[0]) ? 1 : -1))
    .map((v) => v[1]);
}

function get입출차차이(입차시각, 출차시각) {
  const [hour1, minute1] = 입차시각.split(":").map(Number);
  const [hour2, minute2] = 출차시각.split(":").map(Number);

  return hour2 * 60 + minute2 - (hour1 * 60 + minute1);
}
