// ID 1

// 1. Two Sum

/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
_____________________________________________________
*/

// SOLUTION

/* 
1. inputs are an array of numbers & target sum.
2. go through each number and find numbers that add up to target.
3. when you find them, print them out.  
*/

let nums = [2, 7, 11, 15];
let target = 9;
let flag = false;
for (let i = 0; i < nums.length; i++) {
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      let result = nums[i] + nums[j];
      console.log(
        `Sum of indices [${i}]+[${j}] = ${nums[i]} + ${nums[j]} = ${
          nums[i] + nums[j]
        } `
      );
      if (result == target) {
        flag = true;
        break;
      }
    }
  }
  if (flag) break;
}
