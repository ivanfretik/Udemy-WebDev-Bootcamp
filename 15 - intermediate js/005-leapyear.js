/*
Write a program that works out where if a given year is a leap year.
A normal year has 365 days, leap years have 366.
Leap years are:
    -Evenly Divisible by 4
    -Not Evenly Divisible by 100
    -Unless the year is also Evenly Divisible by 400
*/

function isLeap(year) {
    var isLeap = false;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeap = true;
            }
        } else {
            isLeap = true;
        }
    }

    return isLeap;
}

console.log(isLeap(2200))