var array_name;
array_name = [10, 8, 6, 8, 4, 5, 5, 6, 6, 88];
console.log(array_name);
//iteration by forEach method
/*
array_name.forEach((val ,index)=>{
   console.log(index+":" +val);
});
*/
// for loop
/*for(let i = 0 ; i < array_name.length ; i++){
    console.log(i+" "+array_name[i]);
}*/
// for in loop
/*
for(let x in array_name){
    console.log(x+" "+array_name[x]);
}*/
//for loop
var sum = 0;
for (var _i = 0, array_name_1 = array_name; _i < array_name_1.length; _i++) {
    var z = array_name_1[_i];
    sum += z;
}
console.log(sum);
