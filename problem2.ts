/** @format */

function binarySearch(arr :number[], x:number):number {
    let binary1 = 0;
    let binary2 = arr.length - 1;
  
    while (binary1 <= binary2) {
      let mid = Math.floor((binary1 + binary2) / 2);
  
      if (arr[mid] === x) {
        return mid; 
      } else if (arr[mid] < x) {
        binary1 = mid + 1; 
      } else {
        binary2 = mid - 1;
      }
    }
  
    return -1; 
  }
  
  console.log(binarySearch([1, 1, 3, 5, 5, 6, 7],  3)); // 2
  console.log(binarySearch([1, 2, 3, 5, 6, 8, 10], 5)); // 3
  console.log(binarySearch([12, 15, 19, 24, 31, 53, 59, 60], 53)); // 5
  console.log(binarySearch([12, 15, 19, 24, 31, 53, 59, 60], 100)); // -1
  