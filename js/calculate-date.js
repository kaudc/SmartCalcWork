//Datas do LocalStorage
var date = localStorage.getItem('date');
date = JSON.parse(date)
var dayStart = date.dayStart;
var monthStart = date.monthStart;
var yearStart = date.yearStart;
var dayFinish = date.dayFinish;
var monthFinish = date.monthFinish;
var yearFinish = date.yearFinish;

var daysStart = monthQuantityDays(monthStart, yearStart);
var daysFinish = monthQuantityDays(monthFinish, yearFinish);

//Condições pra cálculo de diferença de datas:
if (dayFinish - dayStart < 0) {
    monthFinish = monthFinish - 1;
    dayFinish = dayFinish + daysStart;
}
var daysDiff = dayFinish - dayStart;
if (monthFinish - monthStart < 0) {
    yearFinish = yearFinish - 1;
    monthFinish = monthFinish + 12;
}
var monthDiff = monthFinish - monthStart;
var yearDiff = yearFinish - yearStart;
if (daysDiff == daysFinish) {
    daysDiff = 0;
    monthDiff = monthDiff + 1;
    if (monthDiff == 12) {
        monthDiff = 0;
        yearDiff = yearDiff + 1;
    }
}
//Condições pra cálculo de meses:
if(monthDiff != 0){
    monthDiff = monthDiff -1;
}
if (yearStart == yearFinish) {
    var monthWorkedYear = monthFinish - monthStart - 1;
} else {
    var monthWorkedYear = monthFinish - 1;
}
if (dayFinish > 14) {
    monthDiff++;
    monthWorkedYear++;
}
if (yearStart == yearFinish) {
    var monthDepend = monthWorkedYear;
} else {
    var monthDepend = monthDiff;
}
var days;
//Cálculo de anos bissextos:
function monthQuantityDays(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                days = 29;
            } else if (((year % 4 != 0) || (year % 100 == 0))) {
                days = 28;
            }
            break;
        default:
            console.log("Erro");
    }
    return days;
}