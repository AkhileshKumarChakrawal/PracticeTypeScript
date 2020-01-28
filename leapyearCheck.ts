
function checkeLeapYear(year: number) {
    if(year%400 == 0){
        return "leap year";
    }
    else{
        if((year%100 !=100)&& (year%4 ==0)){
            return "leap year";
        }
        else{
            return "not leap year";
        }
    }
}
let data = checkeLeapYear(1996);
console.log(data);
