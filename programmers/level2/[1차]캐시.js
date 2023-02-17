/**
 * 알게된 점
 * 1. (push + shift) or (unshift + pop) 선택지 중에서, Math.min(shift 발생 비율, unshift 발생 비율)을 택한다.
 */

const CACHE_HIT = 1;
const CACHE_MISS = 5;

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * CACHE_MISS;

  cities = cities.map((city) => city.toLowerCase());

  const list = [];
  let total = 0;

  for (let city of cities) {
    if (list.includes(city)) {
      list.splice(list.indexOf(city), 1);
      total += CACHE_HIT;
    } else {
      if (list.length >= cacheSize) list.shift();
      total += CACHE_MISS;
    }

    list.push(city);
  }

  return total;
}
