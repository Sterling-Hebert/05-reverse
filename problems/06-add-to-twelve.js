/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:


***********************************************************************/


function addToTwelve(arr, arr2 = arr.slice()) {
  if (!arr2.length){
    return false;
  }
  if(arr2[0] + arr2[1] === 12){
    return true
  }
  console.log(arr2.slice(1))
return addToTwelve(arr, arr2.slice(1))
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
