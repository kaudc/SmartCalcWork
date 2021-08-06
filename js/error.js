var paragraphError;
var inputs;

function validateError(){
    var comparationDays = (dateFinishValue>dateStartValue)
    if((dateStartValue == "")||(comparationDays == false)){
        inputs = document.querySelector("#error-date-start");
        addError();
        paragraphError.textContent = "Data de início inválida";
    }
    if((dateFinishValue == "")||(comparationDays == false)){
        inputs = document.querySelector("#error-date-finish");
        addError();
        paragraphError.textContent = "Data de témino inválida";
    }
    if((lastWageValue == "")||(lastWageValue <=0)){
        inputs = document.querySelector("#error-last-wage");
        addError();
        paragraphError.textContent = "Ultimo salário inválido";
    }
    if(numberDependentsValue == ""){
        inputs = document.querySelector("#error-number-dependents");
        addError();
        paragraphError.textContent = "Número de dependentes inválido";
    }
}
function addError(){
    paragraphError = document.createElement("p");
    paragraphError.classList.add("paragraph-error");
    inputs.appendChild(paragraphError);
    
    Swal.fire({
        title: 'Erro!',
        text: 'Preencha os campos corretamente',
        icon: 'error',
        confirmButtonText: 'OK',
      })
    count++;
}
