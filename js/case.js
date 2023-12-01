function getCaseElementId(elementId) {
    const casePlusField = document.getElementById('case-input');
    const caseValueString = casePlusField.value;
    const caseValue = parseInt(caseValueString);
    let newValue;
    if (elementId === true) {
        newValue = caseValue + 1;
    }
    else{
        newValue = caseValue - 1;
        if (newValue < 1) {
            alert('error')
            return;
        }
    }
    casePlusField.value = newValue;
    return newValue;
}
function getCaseTotalBlance(newElement) {
    const newTotalBlance = newElement * 59;
    const previousCaseBlance = document.getElementById('case-blance');
    previousCaseBlance.innerText = newTotalBlance
}

 
document.getElementById('case-plus-btn').addEventListener('click', function () { 
    const newElement = getCaseElementId(true)
    getCaseTotalBlance(newElement)
    getTotalBlance()

})


document.getElementById('case-maines-btn').addEventListener('click', function () {
   const newElement= getCaseElementId(false)
   getCaseTotalBlance(newElement)
    getTotalBlance()
})
 
