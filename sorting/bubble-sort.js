/** Bubble Sort Notes */
/**
 *  Bubble sort is not common to used because it's a O(n2)
 * SWAPPING IS ESSENTIAL
 */

function bubbleSort1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function bubbleSort2(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      /**
       *  left item will be array[i]
       *  right item will be array[i + 1]
       */

      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        // first item in the array will be temp
        const temp = array[i];
        // second item will be the first item
        array[i] = array[i + 1];
        // [done], [] -> move temp to the second item
        array[i + 1] = temp;
        // change the swapped to true
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

function bubbleSort3(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

console.log(bubbleSort1([1, 5, 4, 6, 2]));
console.log(bubbleSort2([1, 5, 4, 6, 2]));
console.log(bubbleSort3([1, 5, 4, 6, 2]));

/**
 *          TIME                    SPACE
 * BEST     AVERAGE     WORST       WORST
 * O(n)        O(n2)    O(n2)       O(1)
 *
 */
