function checkeLeapYear(year) {
    if (year % 400 == 0) {
        return "leap year";
    }
    else {
        if ((year % 100 != 100) && (year % 4 == 0)) {
            return "leap year";
        }
        else {
            return "not leap year";
        }
    }
}
var data = checkeLeapYear(1996);
console.log(data);
