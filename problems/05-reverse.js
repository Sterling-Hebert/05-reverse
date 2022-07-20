/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse(str) {
  console.log(str)
  if(str.length <= 1){
    return str;
  }
  return reverse(str.substring(1)) + str.charAt(0);
}
reverse("house");

// function reverse2(str) {
//   if (str === null) {
//     return null;
//   }
//   if (str.length <= 1) {
//     return str;
//   }
//   var first = str[0];
//   var last = str[str.length - 1];
//   var str1 = reverse2(str.substring(1, str.length - 1));
//   return last + str1 + first;
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
