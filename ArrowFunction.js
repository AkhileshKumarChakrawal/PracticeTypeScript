//arrow function
var multiplicatin = function (num1, num2) {
    console.log(num1 * num2);
};
multiplicatin(36, 20);
//arrow function with argument and return statement
var fectorial = function (num) {
    if (num <= 0)
        return 1;
    else {
        return (num * fectorial(num - 1));
    }
};
var output = fectorial(7);
console.log(output);
//arrow function without param and return
var principle = 100000;
var calcIntrest = function () {
    var time = 3;
    var rateofIntrest = 0.7;
    var simpleIntrest = principle * time * rateofIntrest;
    return simpleIntrest;
};
var si = calcIntrest();
var totalAmount = principle + si;
console.log("total amount in 3 yr is:;" + totalAmount);
console.log(si);
