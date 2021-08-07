//Adiciona proventos:
function addProvTable(id, ref, prov) {
    var tr = document.querySelector(id).children;
    var tdRef = tr[1];
    var tdProv = tr[2];
    var tdDiscount = tr[3];
    tdRef.textContent = ref;
    tdProv.textContent = prov.toFixed(2);
    tdDiscount.textContent = "-";
}
addProvTable("#balanceWage", dayFinish, balanceWage);
addProvTable("#earlyWarningIndemnified", timeEarlyWarning, earlyWarningIndemnified);
addProvTable("#thirteenthProportional", (monthWorkedYear + "/12"), thirteenthProportional);
addProvTable("#thirteenthEarlyWarning", "1/12", thirteenthEarlyWarning);
addProvTable("#expiredVacation",timeExpiredVacation, expiredVacation);
addProvTable("#vacationProportional", (monthDepend + "/12"), vacationProportional);
addProvTable("#vacationEarlyWarning", "1/12", vacationEarlyWarning);

//Adiciona descontos:
function addDiscountTable(id, ref, discount) {
    var tr = document.querySelector(id).children;
    var tdRef = tr[1];
    var tdProv = tr[2];
    var tdDiscount = tr[3];
    tdRef.textContent = ref;
    tdProv.textContent = "-";
    tdDiscount.textContent = discount.toFixed(2);
}
addDiscountTable("#inssWage", ((aliquotInss * 100).toFixed(2) + "%"), inssWage);
addDiscountTable("#irrfWage", ((aliquotIrrf * 100).toFixed(2) + "%"), irrfWage);
addDiscountTable("#inssThirteenth", ((aliquotInss * 100).toFixed(2) + "%"), inssThirteenth);
addDiscountTable("#irrfThirteenth", ((aliquotIrrf * 100).toFixed(2) + "%"), irrfThirteenth);

//Adiciona total:
function addTotal() {
    var totalProv = balanceWage + earlyWarningIndemnified + thirteenthProportional + thirteenthEarlyWarning + expiredVacation + vacationProportional + vacationEarlyWarning;
    var totalDiscount = inssWage + irrfWage + inssThirteenth + irrfThirteenth;
    var total = totalProv - totalDiscount;
    var tr = document.querySelector("#total").children;
    var tdRef = tr[1];
    var tdProv = tr[2];
    var tdDiscount = tr[3];
    tdRef.textContent = "";
    tdProv.textContent = totalProv.toFixed(2);
    tdDiscount.textContent = totalDiscount.toFixed(2);
    return total;
}
var relatoryValue = document.querySelector(".relatory__value");
var total = addTotal();
relatoryValue.textContent = ("R$ "+total.toFixed(2));