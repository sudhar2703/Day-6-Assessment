//Part 3: Find the culprits and nail them — debugging javascript

// 1.Fix the code to get the largest of three.
// let aa = (f,s,t) => {
//    if(f>s &&f>t){
//    console.log(f)}
//    else if(s>f && s>t){
//    console.log(s)}
//    else{
//    console.log(t)}
//   }
//   aa(1,2,3);            //output:3

// 2.Fix the code to Sum of the digits present in the number
// let n = 123;

// function add(n)
// {
//  n=n.toString()
//  n=n.split("");
// let sum = 0;
// for(var i=0;i<n.length;i++){
// sum+=+n[i]
//  }
// return sum;
// }
// console.log(add(n));               //output:6

//3.Fix the code to Sum of all numbers using IIFE function
// const arr = [9,8,5,6,4,3,2,1];
// (function() {
// let sum = 0;
// for (var i = 0; i < arr.length; i++){
// sum += +arr[i];
// }
// console.log(sum)
// return sum;
// })();                                //output:38

// 4.Fix the code to gen Title caps.
// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
// for (var i = 0; i< arro.length; i++) {
// console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
// }
// }
// ano(arr);

// 5.Fix the code to return the Prime numbers
// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
// for(let i=2;i<num;i++){
// if(num%i==0)
// {
// return false;
// }
// }
// return !(num==1);
// });
// console.log(myPrime);

// 6.Fix the code to sum the number in that array
// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// let sum = (a, b) =>
// a + b
// sum = num.reduce(sum)
// console.log(sum);                     //output:550

// 7.Fix the code to rotate an array by k times and return rotated array using IIFE function
// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = k % arr.length; 
// (function() {
  
//   var out = arr.slice(k, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);
// })();

// 8.Fix the code to gen Title caps.
// var arr = ["guvi", "geek", "zen", "fullstack"];
// (function() {
// for (var i = 0; i < arr.length; i++) {
// console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
// }
// })();

// 9.print all odd numbers in an array using IIFE function
// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
// for (var i = 0; i < arr.length; i++) {
// if (arr[i] % 2 != 0) {
// console.log(arr[i]);
// }}
// })();

// 10.Fix the code to reverse.
// (function(str){
//    let str1 = str.split("").reverse().join("");
//    console.log(str1); 
//   })("abcd")

// 11.Fix the code to remove duplicates.
// var res = function(arr){
//    let newArr = [];
//    for(var i=0; i < arr.length; i++){
//    if(arr.indexOf(arr[i]) == i) {
//    newArr.push(arr[i]);
//    } }
//    console.log(newArr)
//   }
//   res(["guvi","geek","guvi","duplicate","geeK"])

// 12.Fix the code to give the below output:
// var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
// var final=[]
// while(array.length!=0)
// {
// var outer_remove = array.shift();
// var new_object={};
 
// while(outer_remove.length!=0)
// {
// var inner_remove = outer_remove.shift()
// var key = inner_remove[0]
// var value =inner_remove[1]
// new_object[key]=value
// }
// final.push(new_object)
// }
// console.log(final);

// 13.Fix the code to give the below output:
// var as=[12,34,5,6,2,56,6,2,1];
//  var s=as.reduce(function(a,c){
  
//   if(c%2!==0)
// {
// return a+c;
// }
// return a;
// },0);
// console.log(s);

// 14.Swap the odd and even digits
// var aa = (data)=>{
//    var a=data;
//    var l="";
     
//   for(let i=0;i<a.length;i++){
//    var s=a[i+1]
//     var b=a[i]
//     l+=s
//     l+=b
//     i=i+1
//    }
//    if((a.length%2)!==0){
//     l+=a[a.length-1]
//    }
//    console.log(l);
//    }
//    aa("1234569");