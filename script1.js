//Q1: Write a javascript functin to check whether an 'input' is an array or not

//1)
//  function checkArr(inpt){
//     return Array.isArray(inpt);

// }
// console.log(checkArr([2]));

//2)
//   function checkArr(inp){
//     return inp instanceof Array;
//   }
//   console.log(checkArr([1,2,3,4]));

//Q2: Write a javscript function to clone an array.

// function cloning(inpt){

//     let newarr = [...inpt];
//     return newarr;
// }

// console.log(cloning([1,2,3,4]));
// console.log(cloning([1,2,[3,4]]));

// Que3 Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' element of the array.

// function getter(inpt, get = 1) {
//   var clone = [];
//   for (var i = 0; i < get; i++) {
//     clone.push(inpt[i]);
// }
//   return clone;
// }

// console.log(getter([1, 2, 3, 4, 5, 6]));

// Que4 Write a simple JavaScript program to join all elements of the following array into a string.

function joiner(inpt) {
  return inpt.join(",");
}
console.log(joiner(["Red", "Green", "Blue", "Yellow"]));
