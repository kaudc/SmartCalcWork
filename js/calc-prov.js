//Dados do LocalStorage
var data = localStorage.getItem('data');
data = JSON.parse(data)

var lastWageValue = data.lastWageValue;
lastWageValue = Number.parseFloat(lastWageValue);

var numberDependentsValue = data.numberDependentsValue;
numberDependentsValue = Number.parseFloat(numberDependentsValue);

var contractFinishValue = data.contractFinishValue;
var expiredVacationValue = data.expiredVacationValue;
var earlyWarningValue = data.earlyWarningValue;

//Salário dividido
var wageForDay = lastWageValue / 30
var wageForMonth = lastWageValue / 12
var wageForOneThird = lastWageValue / 3;

//Condições:
//Tipo de término de contrato:
if ((contractFinishValue == "request") || (contractFinishValue == "no-just-cause")) {
    var balanceWage = calcBalanceWage();
    var thirteenthProportional = calcThirteenthProportional();
    var vacationProportional = calcVacationProportional();
} else if (contractFinishValue == "just-cause") {
    var balanceWage = calcBalanceWage();
    var thirteenthProportional = calcThirteenthProportional();
    var vacationProportional = 0;
}

//Aviso prévio:
if (earlyWarningValue == "true") {
    var daysForYearContract = 3 * yearDiff
    if (daysForYearContract > 90) {
        daysForYearContract = 90;
    }
    var timeEarlyWarning = 30 + daysForYearContract;
    var earlyWarningIndemnified = calcEarlyWarningIndemnified();
    var vacationEarlyWarning = calcVacationEarlyWarning();
    var thirteenthEarlyWarning = calcThirteenthEarlyWarning();
} else {
    var timeEarlyWarning = 0;
    var earlyWarningIndemnified = 0;
    var vacationEarlyWarning = 0;
    var thirteenthEarlyWarning = 0;
}

if(expiredVacationValue == "true"){
    var expiredVacation = calcExpiredVacation();
    timeExpiredVacation = 1;
}else{
    var expiredVacation = 0;
    timeExpiredVacation = 0;
}


//Proventos: 
function calcBalanceWage() {
    var balanceWage = (wageForDay * dayFinish);
    return balanceWage;
}
function calcEarlyWarningIndemnified() {
    var earlyWarningIndemnified = (wageForDay * timeEarlyWarning);
    return earlyWarningIndemnified;
}
function calcThirteenthProportional() {
    var thirteenthProportional = (wageForMonth * monthWorkedYear);
    return thirteenthProportional;
}
function calcThirteenthEarlyWarning() {
    var thirteenthEarlyWarning = (wageForDay * timeEarlyWarning);
    return thirteenthEarlyWarning;
}
function calcExpiredVacation() {
    var expiredVacation = (lastWageValue + wageForOneThird);
    return expiredVacation;
}

function calcVacationProportional() {
    var vacationProportional = (wageForMonth * monthDepend);
    return vacationProportional;
}
function calcVacationEarlyWarning() {
    var vacationEarlyWarning = ((1 / 12) * (lastWageValue + wageForOneThird));
    return vacationEarlyWarning;
}




