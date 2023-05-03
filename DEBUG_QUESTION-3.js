// Part 2 : Find the culprits and nail them — debugging javascript loops
// 1. Write a code to print the numbers in the array
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] 
// }
// console.log(new_string); //1234567891011

// 2.Write a code to print the numbers in the array
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
// for (var i = 0; i < 11; i++) {
// new_string += numsArr[i] + ",";  
// }
// new_string=new_string.substring(0,new_string.length-1);
// console.log(new_string);  //1,2,3,4,5,6,7,8,9,10,11

//3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// var new_string = "";
 
// for (var i = 11; i > 0; i-- ) {
//  new_string += i + " ";
// }
// new_string=new_string.trimEnd();
// console.log(new_string);

// 4.Write a code to replace the array value — If the number is even, replace it with ‘even’.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
// if(numsArr[i] %2 == 0 )
// {
//  numsArr[i] = "even";
//  }
// }
// console.log(numsArr);

// 5.Write a code to add all the numbers in the array
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;                                              //declaring inital value for sum.
// for (var i = 0; i <=10; i++) {
// sum += numsArr[i]
// }
// console.log(sum);                                      //output:66

// 6.Write a code to add the even numbers only
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
// if(numsArr[i]%2==0)                                    // semi colon should not placed after if statement
// sum += numsArr[i]
// }
// console.log(sum);                                      // output:30

// 7.Write a code to add the even numbers and subract the odd numbers
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0)                                    // semi colon should not placed after if statement
// {
// sum -= numsArr[i]                                       // change + to -
// }
// else
// {
// sum += numsArr[i]                                       // change - to +
// }
// }
// console.log(sum);                                      //output: 94

// 8.Write a code to print inner arrays
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];   //comma should be given to seperate it.
// for (var i = 0; i < numsArr.length; i++) {
//  console.log( numsArr[i])     
// }                                                        //output: (5) [1, 2, 3, 4, 5]
//                                                                   (6) [6, 7, 8, 9, 10, 11]

// 9.Write a code to print elements in the inner arrays
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="";                                          // empty string should be declared
// for (var i = 0; i < numsArr.length; i++) {
// var inner_array = numsArr[i];
// for(var j = 0 ; j < inner_array.length;j++ )             // i++ to j++
//     str_all +=inner_array[j]
// }
// console.log(str_all);                                    //output: 1234567891011

// 10.Write a code to replace the array value — If the index is even, replace it with ‘even’.
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
// for(var j = 0 ; j < inner_array.length;j++ ){
//      if(str_all %2 == 0 )
//      {
//         numsArr[i][j] = "even"
//       }
//       str_all++
// }
// }
// console.log(numsArr)                                    //output:[[1, even, 3, even, 5],[ even, 7, even, 9, even, 11]]

// 11.Write a code to print elements in the inner arrays in reverse
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="";
// for (var i = numsArr.length-1; i >=0; i--) {
// var inner_array = numsArr[i];
// for(var j = inner_array.length-1; j >= 0 ;j-- ){
//     str_all +=inner_array[j]+" ";
// }
// }
// console.log(str_all);                                  //output: 11 10 9 8 7 6 5 4 3 2 1 

// 12.Write a code to add elements in the inner arrays based on odd or even values
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
// for(var j = 0 ; j < inner_array.length;j++ ){
// if(inner_array[j]%2!=0)
// {
// sum_odd += inner_array[j]
// }
// else
// {
// sum_even += inner_array[j]
// }
// }
// }
// console.log(sum_odd);                                   //output:36
// console.log(sum_even);                                           30