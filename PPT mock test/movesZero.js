function moveZeroes(nums) {
  let index = 0;

  // Move all non-zero elements to the beginning of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  // Fill the remaining positions with zeroes
  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }

  return nums;
}

