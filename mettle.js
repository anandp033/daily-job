// Given an array arr[] of integers, find out the difference between any two elements
//such that larger element appears after the smaller number in arr[].

// Examples: If array is[2, 3, 10, 6, 4, 8, 1] then returned value should be 8(Diff between 10 and 2).
//If array is[7, 9, 5, 6, 3, 2] then returned value should be 2(Diff between 7 and 9)

// Time Complexity: O(n ^ 2)
// Auxiliary Space: O(1)

function Diff(array) {
  let j = 1;
  let diff = 0;
  let x = [];
  for (let i = 0; i < array.length; i++) {
    if (array[j] > array[i]) {
      diff = array[j] - array[i];
      x.push(diff);
      j++;
    } else {
      j++;
    }
  }
  return x.sort((x, y) => x - y)[x.length - 1];
}
console.log(Diff([2, 3, 10, 6, 4, 8, 1]));
console.log(Diff([7, 9, 5, 6, 3, 2]));
