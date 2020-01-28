let str1: string = 'Hello';
let str2: string = 'JavaTpoint';

//String Concatenation
console.log("Combined Result: " + str1.concat(str2));

//String charAt
console.log("Character At 4: " + str2.charAt(4));

//String indexOf
console.log("Index of T: " + str2.indexOf('T'));

//String replace
console.log("After Replacement: " + str1.replace("hello","Hi"));

//String uppercase
console.log("UpperCase: " + str2.toUpperCase());

let str3 : string = "hi my name is Akhil kumar ";
let Str4 : string[] = str3.split(" ");

/*
Str4.forEach((data)=>{
   console.log(data);
});
console.log(str3.trim());
*/

console.log(str3.charAt(1));
