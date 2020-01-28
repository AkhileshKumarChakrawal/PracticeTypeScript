//arrow function
let multiplicatin = (num1 : number , num2 : number)=>{
    console.log(num1*num2);
}
multiplicatin(36,20);

//arrow function with argument and return statement
let fectorial= (num : number):number =>{
    if(num <= 0)
        return 1 ;

    else{
        return (num * fectorial(num-1));
    }
}

let output = fectorial(7);
console.log(output);


//arrow function without param and return
let principle : number = 100000;
let calcIntrest = ():number =>{

    let time: number = 3;
    let rateofIntrest : number = 0.7;

    let simpleIntrest = principle * time * rateofIntrest;
    return simpleIntrest;
}
let si = calcIntrest();
let totalAmount = principle + si;
console.log("total amount in 3 yr is:;"+totalAmount);

console.log(si);
