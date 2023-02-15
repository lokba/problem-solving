function solution(participants, completions) {
  const map = new Map();

  for (let completion of completions) {
    if (map.has(completion)) map.set(completion, map.get(completion) + 1);
    else map.set(completion, 1);
  }

  for (let participant of participants) {
    if (map.has(participant)) {
      const count = map.get(participant);

      if (count === 0) return participant;

      map.set(participant, count - 1);
    } else return participant;
  }
}
