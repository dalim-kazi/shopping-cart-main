function updateNewValue(updateValue) {
    const phoneInputField = document.getElementById('iphone-field');
    const phoneValueString = phoneInputField.value;
    const phoneValue = parseInt(phoneValueString)
    let newValue;
    if (updateValue === true) {
        newValue = phoneValue + 1;
    }
    else {
        newValue = phoneValue - 1;
        if (newValue < 1) {
            alert('error')
            return;
        }
    }
    phoneInputField.value = newValue;
    return newValue;  
}
function updateNewBlance(newValue) {
    const newTotalBlance = newValue * 1200;
    const previousBlance = document.getElementById('phone-blance');
    previousBlance.innerText=newTotalBlance
     
}

document.getElementById('iphone-plus-btn').addEventListener('click', function () {
    const newValue = updateNewValue(true)
    updateNewBlance(newValue)
    getTotalBlance()
})

document.getElementById('iphone-maines-btn').addEventListener('click', function () {
    const newValue = updateNewValue(false)
    updateNewBlance(newValue)
    getTotalBlance()
    
})

