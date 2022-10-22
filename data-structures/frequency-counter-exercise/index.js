// check if there are any duplicates among the many possible arguments passed

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  
  // we can sort and compare to next value or use frequency counter
  // here I use frequency counter
  const contains = {};

  for(let i = 0; i < arguments.length; i++) {
      if (contains[arguments[i]]) return true;
      contains[arguments[i]] = true;
  }
  
  return false;
};

module.exports = areThereDuplicates;
