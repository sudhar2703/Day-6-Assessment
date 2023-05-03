//Part 1: Find the culprits and nail them — debugging javascript
// 1.Find the culprit
// <!DOCTYPE html>
// <html>
// <body>
// <script>
//  alert( "I’m JavaScript!");
//  </script>
//   alert is closed with single quatation it should be closed with double quatation
// </body>
// </html>

// 2.Find the culprit and invoke the alert
// alert("I’m invoked!"); replace with ""

// 3.explain the working 
//  alert("I'm JavaScript!");
//   alert('Hello') // this line is not having semicolon
//   alert(`Wor
 //   ld`)  //javascript don't consider extra white spaces.
//   alert(3 +
//   1
//    + 2); // this is multiple line code and its working

//4.Fix the below to alert Guvi geek
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+" "+lname; // put extra space
// alert( admin ); // Guvi geek

// 5.Fix the below to alert hello Guvi geek
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+" "+lname;
// alert( `hello ${name}` ); //hello Guvi geek

// 6.Fix the below to alert sum of two numbers
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(+a + (+b));   // typecasting
                   //a=1,b=3 a+b=4

// 7.f you run the below scritpt you will get “Code is Blasted”
//  Explain Why the Code is blasted and how to diffuse it and get “Diffused”.                   
// var a = "2" > "12";  // we comparing strings not numbers 1 is less then 2
// Don't touch below this
// if (a) {
//  console.log("Code is Blasted")
// }
// else
// {
// console.log("Diffused") 
// }   

// 8.How to get the success in console.
// let a = prompt("Enter a number?");
// Don't modify any code below this
// if (a) {
// a=+a;         // covert string to number then enter 0
// console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
// console.log( "Success" );  //success
// }

// 9.How to get the correct score in console.
// let value = prompt('How many runs you scored in this ball');
// value = +value;   // covert string to number
// if (value === 4) {
//     console.log("You hit a Four");
// } else if (value === 6) {
//     console.log("You hit a Six");
// } else {
//      console.log("I couldn't figure out");
//}

// 10.Fix the code to welcome the Employee
// let login = 'Employee';
// let message = (login == 'Employee') ? 'Greetings': added greetings for employee in ternary operator
//   (login == 'Director') ? 'Greetings' :
//  (login == '') ? 'No login' :
//  '';
// console.log(message);

// 11.Fix the code to welcome the boss
// let message;
// if (null || 2 || undefined )
// {
//  message = "welcome boss";
// }
// else
// {
//  message = "Go away";
// }
//  console.log(message);

// 12.Fix the code to welcome the boss
// let message;
// let lock = 0;    //make lock=0 so it becomes false;
//Dont change any code below this 
// if (null || lock || undefined )
// {
//  message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//  console.log(message);

// 13.Fix the code to welcome the boss
// let message;
// let lock = 0 ;  //make lock=0 so it becomes false;
//Dont change any code below this
// if (lock && " " || undefined )
// {
//  message = "Go away";
// }
// else
// {
// message = "welcome";
// }
// console.log(message);

// 14.Change the code to print
// let i = 3;
// while (i) {
//  console.log( i--);
// }

// 15.Change the code to print 1 to 10 in 4 lines
// let num = +1
// console.log(num,num=num+1,num=num+1);
// console.log(num=num+1,num=num+1,num=num+1);
// console.log(num=num+1,num=num+1,num=num+1);
// console.log(num=num+1);

//16.Change the code to print even numbers
// for (let num = 2; num <= 20; num += 2) {
//  console.log(num)
// }

// 17.Change the code to print all the gifts
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//  console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

// 18.Fix the code to disarm the bomb.
// let countdown = 100;
// while (countdown > 0) {
  
// if(countdown == 0)
// {
// console.log("bomb triggered");
// }
// countdown--;
// }

// 19.Whats the msg printed and why?
// var lemein = "0"; //true
// var lemeout = 0;  //false
// var msg = "";
// if (lemein) { // lemin = "0" so its true
// msg += "hi";
// }
// if (lemeout) {
//  msg += 'Hello';
// }
// console.log(msg); // output: hi