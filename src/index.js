module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let hash = {};
  
  for (let i = 0; i < array.length; i++) {
    hash[array[i].toString()] = array[i];
  }

  let currentMax = 1;
  let count = 1;

  for (key in hash) {
    if (hash[key - 1] != undefined) {
      count++;
    } else {
      currentMax = currentMax < count? count: currentMax;
      count = 1;
    }
  }


  if (array.length == 0) {
    currentMax = 0;
  }

  return currentMax;
}
