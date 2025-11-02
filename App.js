// let a = 10;
// let b = 30;

// console.log(a+b);


// let a= 10;
// let b=20;


// console.log("sun of 10 and 20 is :",(a+b));


// let age = Number(prompt("Enter your age"));


// console.log(age);



// let a =10;
// let b=20;

// let c ;

// c=a;
// a=b;
// b=c;


// console.log(a);
// console.log(b);


// let a =10;
// let b= 20;


// a=a+b;//10+20=30

// b=a-b;// 30-20=10

// a=a-b; //30-10=20


// console.log(a,b);



// let a =10;
// let b=20;

// [a,b]=[b,a]


// console.log(a,b);


// let i = 11;

// i=i++ ;

// console.log(i);


// let i =11;

// i=++i;

// console.log(i);


// let a =11;
// let b=22;
// let c= a+b + a++ + b++ + ++a + ++b ;
// console.log(a);
// console.log(b);
// console.log(c);



// a=10;

// // a=a+1;

// a++;

// console.log(a);




//Day 2 conditional satements and Loops


// let age = Number(prompt("Enter your Age :"));

// if (isNaN(age)) {
//     console.log("Wrong input");
// }

// else if (age>=18) {
// console.log("You can Vote");
// }


// else{
//     console.log("you can't vote ");

// }


//Discount Problem

// let Amount = Number(prompt("Enter the Amount Hear : "))

// if (Amount>0 && Amount<=5000) {
//     console.log(Amount);

// }

// else if(Amount>=5001 && Amount<=7000){
//     console.log(Math.floor(Amount-5*Amount/100));
// }

// else if(Amount>=7001 && Amount<=9000){
//     console.log(Math.floor(Amount-10*Amount/100));
// }

// else if( Amount>9000){

//     console.log(Math.floor(Amount-20*Amount/100))
// }

// else{
//     console.log("Wrong input");

// }


// let Amount = Number(prompt("Enter the Amount Hear : "))
// let Discount=0;

// if (Amount>0 && Amount<=5000) {
//    Discount=0;
// }

// else if(Amount>=5001 && Amount<=7000){
//     Discount=5;
// }

// else if(Amount>=7001 && Amount<=9000){
//     Discount=10;
// }

// else if( Amount>9000){
//     Discount=20;

// }

// else{
//     console.log("Wrong input");

// }

//  console.log(Math.floor(Amount-Discount*Amount/100))




// let unit = Number(prompt("Enter electricity Bill   :"));
// let Amount=0;

// if (unit > 400) {
// Amount=(unit- 400)*13
//     unit=400;
// }

// if (unit<=400 && unit>200 ) {
// Amount+=(unit-200)*8;
//     unit=200;
// }

// if (unit<=200 && unit>100 ) {
// Amount+=(unit-100)*6
//     unit=100;
// }


// Amount+=(unit-100)*4


// console.log(Amount);



// let unit = Number(prompt("Enter electricity Bill :"));
// let Amount = 0;

// if (unit > 400) {
//   Amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit <= 400 && unit > 200) {
//   Amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit <= 200 && unit > 100) {
//   Amount += (unit - 100) * 6;
//   unit = 100;
// }
// if (unit <= 100) {
//   Amount += unit * 4;
// }

// console.log(Amount);


// let Amount = 2328;

// if(Amount>=500){
//    console.log("500 notes: "+Math.floor(Amount/500));
//     Amount=Amount % 500;
// }

// if(Amount>=200){
//    console.log("200 notes: "+Math.floor(Amount/200));
//     Amount=Amount % 200;
// }

// if(Amount>=100){
//    console.log("100 notes: "+Math.floor(Amount/100));
//     Amount=Amount % 100;
// }

// if(Amount>=50){
//    console.log("50 notes: "+Math.floor(Amount/50));
//     Amount=Amount % 50;
// }

// if(Amount>=20){
//    console.log("20 notes: "+Math.floor(Amount/20));
//     Amount=Amount % 20;
// }

// if(Amount>=10){
//    console.log("10 notes: "+Math.floor(Amount/10));
//     Amount=Amount % 10;
// }

// if(Amount>=5){
//    console.log("5 notes: "+Math.floor(Amount/5));
//     Amount=Amount % 5;
// }

// if(Amount>=2){
//    console.log("2 notes: "+Math.floor(Amount/2));
//     Amount=Amount % 2;
// }

// if(Amount>=1){
//    console.log("1 notes: "+Math.floor(Amount/1));
//     Amount=Amount % 1;
// }




let Number = Math.floor(0.1+ 0.2);

switch (Number) {
  case 0.3:
    console.log("Hello");
    break;

  case 0.5:
    console.log("heyy");
    break;

  default:console.log("namaste");
  
    
}




 


