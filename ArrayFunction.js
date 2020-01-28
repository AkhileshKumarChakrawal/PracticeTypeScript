var number_array;
number_array = [45, 88];
number_array.push(6);
number_array.push(9);
console.log(number_array);
number_array.pop();
number_array.pop();
console.log(number_array);
//methods in array
for (var x = 6; x < 10; x++) {
    number_array.push(x);
}
number_array.unshift(1, 99, 103);
number_array.shift();
number_array.reverse();
number_array.map(function (value) {
    console.log(value);
});
console.log(number_array);
