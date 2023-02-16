function solution(id_list, reports, k) {
  const 피해자테이블 = new Map();
  const 가해자테이블 = new Map();

  for (let id of id_list) {
    피해자테이블.set(id, new Set());
    가해자테이블.set(id, new Set());
  }

  for (let report of reports) {
    const [피해자, 가해자] = report.split(" ");

    피해자테이블.set(피해자, 피해자테이블.get(피해자).add(가해자));
    가해자테이블.set(가해자, 가해자테이블.get(가해자).add(피해자));
  }

  const 블랙리스트 = [];

  for (let [key, value] of 가해자테이블) {
    if (value.size >= k) 블랙리스트.push(key);
  }

  const result = [];

  for (let [_, value] of 피해자테이블) {
    result.push([...value].filter((id) => 블랙리스트.includes(id)).length);
  }

  return result;
}
