function solution(orders, course) {
  orders = orders.map((v) => v.split("").sort((a, b) => (a > b ? 1 : -1)));
  const result = [];

  for (let i = 0; i < course.length; i++) {
    const list = [];
    const map = new Map();
    let maxCount = 0;

    for (let order of orders) {
      const combi = combination(order, course[i]).map((v) => v.join(""));
      list.push(...combi);
    }

    for (let item of list) {
      if (map.has(item)) {
        const newCount = map.get(item) + 1;
        map.set(item, newCount);

        if (newCount > maxCount) maxCount = newCount;
      } else map.set(item, 1);
    }

    const filtered = [...map].filter(([_, count]) => count === maxCount);
    result.push(...filtered.map(([key]) => key));
  }

  return result.sort((a, b) => (a > b ? 1 : -1));
}

function combination(list, count) {
  if (count === 1) return list.map((item) => [item]);

  const result = [];

  for (let i = 0; i < list.length; i++) {
    const slicing = list.slice(i + 1);
    const combi = combination(slicing, count - 1);
    result.push(...combi.map((v) => [list[i], ...v]));
  }

  return result;
}
