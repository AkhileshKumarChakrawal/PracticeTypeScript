
//function with parameter
function addition(num1 : number , num2 : number):void{
    let sum : number;
     sum = num1 + num2;
     console.log(sum);
}
addition(48 , 96);

function subtraction(num1 : number , num2 : number):void{
    let diff = num2- num1;
    console.log(diff);
}
subtraction(48,63);


//function with parameter and return statement
function checkPassword(usename : string , password: string):string
{
    if(password.length > 7) {
        return usename+" "+password;
    }
    else {
        return "password length should be greater than 7";
    }
}
let userdetail = checkPassword("aman" , "aman@4545");
console.log(userdetail);


//function with param and return statement

 function fectorial(num : number){
    if(num <= 0)
        return 1 ;

    else{
        return (num * fectorial(num-1));
    }
}
console.log(fectorial(6));

function factorial(number) {
    if (number <= 0) {
        return 1;
    } else {
        return (number * factorial(number - 1));
    }
};
console.log(factorial(6));


//function without param and return
let principle : number = 100000;
let calcIntrest = function():number{

    let time: number = 3;
    let rateofIntrest : number = 0.7;

    let simpleIntrest = principle * time * rateofIntrest;
    return simpleIntrest;
}
let si = calcIntrest();
let totalAmount = principle + si;
console.log("total amount in 3 yr is:;"+totalAmount);

console.log(si);
