let array_name : number[];
array_name = [10,8,6,8,4,5,5,6,6,88];
console.log(array_name);

//iteration by forEach method

array_name.forEach((val ,index)=>{
   console.log(index+":" +val);
});


// for loop
for(let i = 0 ; i < array_name.length ; i++){
    console.log(i+" "+array_name[i]);
}

// for in loop

for(let x in array_name){
    console.log(x+" "+array_name[x]);
}

//for of loop
let sum = 0;
for(let z of array_name){

    sum+=z;

}
console.log(sum);
