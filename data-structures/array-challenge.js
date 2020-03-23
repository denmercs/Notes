/**
 * Problem statement
 * Implement a function removeEven(arr), 
 * which takes an array arr in its input and 
 * removes all the even elements from a given array.
 */

 function removeEven(arr) {
     let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            newArr.push(arr[i])
         }
    }
     return newArr;
 }

//  console.log(removeEven([1,3,5,2,4,6]))

 /**
  * Problem Statement - Merge Two Sorted Arrays
  * Given two sorted arrays, merge them into one array that is sorted.
  */

  let arr1 = [1,3,4,5];
  let arr2 = [2,6,7,8];

  function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2).sort((a,b) => a -b)
    return newArr;
  }

//   console.log(mergeArrays(arr1, arr2))

  /**
   * Problem Statement - Find Two Numbers that Add up to "value"
   * Given an array and a number "value", find two numbers from the array 
   * that sum to 'value'. Implement your solution in JavaScript and see if
   * your output matches with the correct output.
   */

   let arr = [1,21,3,14,5,60,7,6];
   value = 81;

   // Brute force - O(n2)
   function findSum(arr, value) {
       let results = [];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === value) {
                return [arr[i], arr[j]]
            }
        }
    }
    return false;
   }

   // Binary Search - time complexity O(nlogn)
   function binarySearch(arr, item) {
       let first = 0;
       let mid;
       let last = arr.length - 1;
       let found = false;
       let arrayIndex = -1;

       while((first <= last) && !found) {
           mid = Math.floor((first + last) / 2)
           if(arr[mid] == item) {
               arrayIndex = mid;
               found = true;
           } else {
               if(item < arr[mid]) {
                   last = mid - 1;
               } else {
                   first = mid + 1;
               }
           }
       }
       if (found) {
           return arrayIndex;
       } else {
           return false;
       }
   }

   function findSumEfficientWay(arr, value) {
       arr.sort(function(a, b) {
           return a - b;
       })

       let index;
       for(let j = 0; j < arr.length; j++) {
           index = binarySearch(arr, (value - arr[j]));
           if(index != false && j!= index) {
               return [arr[j], value-arr[j]]
           }
           return false;
       }
   }

   console.log(findSum([1,21,3,14,5,60,7,6], 81))
   console.log(findSumEfficientWay([1,21,3,14,5,60,7,6], 81))

   // Moving indices - O(nlogn)
   function findSumEfficientWay2(arr, value) {
       arr.sort(function(a, b) {
           return a - b;
       })

       let index1 = 0;
       let index2 = arr.length - 1;
       let results = [];
       let sum = 0;

       while (index1 != index2) {
           sum =arr[index1] + arr[index2];

           if(sum < value) {
               index1++;
           } else if (sum > value) {
               index2--;
           } else {
               results.push(arr[index1]);
               results.push(arr[index2]);
               return results;
           }
       }
       return false;
   }

   console.log(findSumEfficientWay2([1,2,3,4], 5));

   /**
    * Problem Statement: Array of Products of All Elements
    * Given an array, return an array where each index stores the product 
    * of all numbers in the array except the number at the index itself.
    */

    let productAll = [1,2,3,4];

    function findProduct(arr){
        var result = []
        var left = 1, currentproduct;
        //To store product of all previous values from currentIndex
        for(var i=0;i<arr.length;i++){
          currentproduct = 1
          //To store current product for index i    
              //compute product of values to the right of i index of list
          for(var j=i+1;j<arr.length;j++){
              console.log(arr[j])
            currentproduct = currentproduct * arr[j]
          }
          //currentproduct * product of all values to the left of i index
          result.push(currentproduct * left)
          //Updating `left`
          left = left * arr[i]
        }
          
        return result
      }

    function findProductEfficient(arr) {
        let left = 1;
        let product = [];
        for(let val of arr) {
            product.push(left);
            left = left * val;
        }

        let right = 1;
        for(let i = arr.length - 1; i > -1; i--) {
            product[i] *= right;
            right *= arr[i];
        }
        return product;
    }

    console.log('product all', findProduct(productAll))


