//Justa causa
var select = document.querySelector(".select");
select.onchange = function () {
    var valueSelect = this.value;
    var radioEarlyWarningYes = document.querySelector("#early-warning");
    if (valueSelect == "just-cause") {
        radioEarlyWarningYes.disabled = true;
    } else {
        radioEarlyWarningYes.disabled = false;
    }
}
var dateStartValue;
var dateFinishValue;
var lastWageValue;
var numberDependentsValue;
var count;

var button = document.querySelector(".button");
button.addEventListener("click", getValues)
function getValues() {
    //Pega valores do formulário:
    var dateStart = document.querySelector("#date-start");
    var dateFinish = document.querySelector("#date-finish");
    dateStartValue = new Date(dateStart.value);
    dateFinishValue = new Date(dateFinish.value);
    var dayStart = dateStartValue.getUTCDate();
    var monthStart = dateStartValue.getUTCMonth() + 1;
    var yearStart = dateStartValue.getUTCFullYear();
    var dayFinish = dateFinishValue.getUTCDate();
    var monthFinish = dateFinishValue.getUTCMonth() + 1;
    var yearFinish = dateFinishValue.getUTCFullYear();

    lastWageValue = document.querySelector("#last-wage").value;
    numberDependentsValue = document.querySelector("#number-dependents").value;
    var contractFinish = document.querySelector("#contract-finish");
    var contractFinishValue = contractFinish.options[contractFinish.selectedIndex].value;
    var expiredVacationValue = document.querySelector('input[name="radio-vacation"]:checked').value;
    var earlyWarningValue = document.querySelector('input[name="radio-warning"]:checked').value;

    //Erros:
    count = 0;
    var pError = document.querySelectorAll(".paragraph-error").forEach(e => e.parentNode.removeChild(e));
    validateError();

    //LocalStorage
    if (count == 0) {
        var data = {
            lastWageValue,
            numberDependentsValue,
            contractFinishValue,
            expiredVacationValue,
            earlyWarningValue
        }
        var date = {
            dayStart,
            monthStart,
            yearStart,
            dayFinish,
            monthFinish,
            yearFinish
        }
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.setItem("date", JSON.stringify(date));

        window.location.assign("./relatory.html");
    }
}

