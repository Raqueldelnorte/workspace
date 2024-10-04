function addTogether(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return undefined;
    }else{
      return a+b
    }
  }
  
  console.log(addTogether(2,3));