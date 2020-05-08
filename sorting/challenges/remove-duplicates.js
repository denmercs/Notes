//leetcode.com/problems/remove-duplicates-from-sorted-array/

https: var removeDuplicates = function (nums) {
  // loop through the array , if the next value is equal to the previous, then we get rid of it
  // we keep track o fthe previous value, and change that after we compare to the real current

  //  we have two pointers, the first pointer is where we want to insert
  // the second pointer is where we are iterating in our array

  // pointer1 = 0;
  // the second pointer is where we are iterating in our array
  // pointer2 = 0;

  // loop over the array
  // compare the currentitem to the previous item
  // nums[i] ><= nums[i-1]
  // check if they are equal
  // ignore and move pointer2 to the next item
  // if they aren't equal
  // replace the value at pointer1 with the current
  // increment pionter1 and 2

  let pointer1 = 0;
  let prev = null;

  for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
    if (nums[pointer2] !== nums[pointer2 - 1]) {
      nums[pointer1] = nums[pointer2];
      pointer1++;
    }

    prev = nums[pointer2];
  }

  return pointer1++;
};
