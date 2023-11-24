/** @format */

function fiboTopDown(num: number) {
    if (num <= 1) {
      return num;
    }

    let fibo1  = 0;
    let fibo2  = 1;
    let fibo;
  
    for (let i = 2; i <= num; i++) {
      fibo = fibo1 + fibo2;
    //   console.log("fibo : ", fibo);
      fibo1 = fibo2;
    //   console.log("fiboIMinDua : ", fibo2);
      fibo2 = fibo;
    //   console.log("fiboIMinSatu : ", fibo1);
     
    }
  
    return fibo;
  }
  
  console.log(fiboTopDown(0)); // 0
  console.log(fiboTopDown(1)); // 1
  console.log(fiboTopDown(2)); // 1
  console.log(fiboTopDown(3)); // 2
  console.log(fiboTopDown(4)); // 3
  console.log(fiboTopDown(5)); // 5
  console.log(fiboTopDown(6)); // 8
  console.log(fiboTopDown(7)); // 13
  console.log(fiboTopDown(8)); // 21
  console.log(fiboTopDown(9)); // 34
  console.log(fiboTopDown(10)); // 55
  