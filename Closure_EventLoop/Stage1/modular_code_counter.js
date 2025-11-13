function counter(){
  let count = 0 ;
  function inc(){
    count++;
    console.log("inc " + count);
    
  }
  function dec(){
    count--;
    console.log("dec " + count);
    
  }

  function reset(){
    count = 0 ;
    console.log("reset " + count);
    
  }
  return {inc,dec,reset};
}

const fun = counter();
fun.inc(); // 1
fun.inc(); // 2
fun.inc(); // 3
fun.dec(); // 2
fun.reset(); // 0

// accessbility mow becomes eaisy from one fun we can access easily
