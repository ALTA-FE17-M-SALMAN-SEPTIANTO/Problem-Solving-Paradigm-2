function frog(jumps:Array<number>) {
    if (jumps.length === 0) {
      return 0; 
    }

    const maxJump = Math.max(...jumps);
    const minJump = Math.min(...jumps);
  

    const result = maxJump - minJump;
  
    return result;
  }
  
  console.log(frog([10, 30, 40, 20])); // 30
  console.log(frog([30, 10, 60, 10, 60, 50])); // 50
  