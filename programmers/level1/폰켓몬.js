function solution(nums) {
  const set = new Set(nums);
  const count = nums.length / 2;

  return set.size < count ? set.size : count;
}
