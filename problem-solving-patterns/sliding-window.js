function find_averages_of_subarrays(k, arr) {
    let result = [];
    let windowSum = 0.0; // float
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // add the next element

        if(windowEnd >= k - 1) { // calculate the average num
            result.push(windowSum / k); // calculate the average
            windowSum -= arr[windowStart] // subtract the element going out
            windowStart += 1; // slide the window ahead
        }
    }

    return result;
}

const result = find_averages_of_subarrays(5, [1,3,2,6,-1,4,1,8,2]);
console.log(find_averages_of_subarrays(`find average result will be: , ${result}`))

function find_maximum_subarray_of_size(k, arr) {
    let maxSum = 0,
    windowSum = 0;

  for (i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0;
    for (j = i; j < i + k; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

const result2 = find_maximum_subarray_of_size(3, [2,1,5,1,3,2]);
console.log('find_averages_of_subarrays', result2)
