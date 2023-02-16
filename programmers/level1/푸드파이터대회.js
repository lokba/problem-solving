function solution(food) {
  const list = [];

  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);

    list.push(String(i).repeat(count));
  }

  return `${list.join("")}0${list.reverse().join("")}`;
}
