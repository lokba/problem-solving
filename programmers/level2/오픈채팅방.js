function solution(record) {
  const nicknameTable = new Map();

  for (let log of record) {
    const [type, id, nickname] = log.split(" ");
    if (type === "Enter" || type === "Change") nicknameTable.set(id, nickname);
  }

  const result = [];

  for (let log of record) {
    const [type, id] = log.split(" ");

    if (type === "Enter")
      result.push(`${nicknameTable.get(id)}님이 들어왔습니다.`);
    else if (type === "Leave")
      result.push(`${nicknameTable.get(id)}님이 나갔습니다.`);
  }

  return result;
}
