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

function cloning(inpt){

    let newarr = [...inpt];
    return newarr;
}

console.log(cloning([1,2,3,4]));