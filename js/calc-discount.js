//Tabela INSS:
if (lastWageValue <= 1100) {
    var aliquotInss = 0.075;
    var parcelSubtractInss = 0;
} else if (lastWageValue > 1100 && lastWageValue <= 2203.48) {
    var aliquotInss = 0.09;
    var parcelSubtractInss = 16.500;
} else if (lastWageValue > 2203.48 && lastWageValue <= 3305.22) {
    var aliquotInss = 0.12;
    var parcelSubtractInss = 82.604;
} else {
    var aliquotInss = 0.14;
    var parcelSubtractInss = 148.708;
}
//Tabela IRRF:
if (lastWageValue <= 1903.98) {
    var aliquotIrrf = 0
    var parcelSubtractIrrf = 0;
} else if (lastWageValue > 1903.98 && lastWageValue <= 2826.65) {
    var aliquotIrrf = 0.075;
    var parcelSubtractIrrf = 142.80;
} else if (lastWageValue > 2826.65 && lastWageValue <= 3751.05) {
    var aliquotIrrf = 0.15;
    var parcelSubtractIrrf = 354.80;
} else if (lastWageValue > 3751.05 && lastWageValue <= 4664.68) {
    var aliquotIrrf = 0.225;
    var parcelSubtractIrrf = 636.13;
} else {
    var aliquotIrrf = 0.275;
    var parcelSubtractIrrf = 869.36;
}
//Dependentes:
if ((numberDependentsValue > 0) && (aliquotIrrf > 0)) {
    parcelSubtractIrrf += (189.59 * numberDependentsValue);
}
//Descontos:
function calcInssWage() {
    var inssWage = ((balanceWage * aliquotInss));
    return inssWage;
}
function calcIrrfWage() {
    var irrfWage = ((lastWageValue * aliquotIrrf) - parcelSubtractIrrf);
    return irrfWage;
}
function calcInssThirteenth() {
    var inssThirteenth = (thirteenthProportional * aliquotInss);
    return inssThirteenth;
}
function calcIrrfThirteenth() {
    var irrfThirteenth = (thirteenthProportional * aliquotIrrf);
    return irrfThirteenth;
}
var inssWage = calcInssWage();
var irrfWage = calcIrrfWage();
var inssThirteenth = calcInssThirteenth();
var irrfThirteenth = calcIrrfThirteenth();