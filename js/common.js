// new part
console.log('part-2')
function getSubTotalBlance(TotalBlance) {
    const cerrentTotalBlance = document.getElementById(TotalBlance);
    const cerrentTotalBlanceString = cerrentTotalBlance.innerText
    const totalBlance = parseInt(cerrentTotalBlanceString);
    return totalBlance;

}


function getSetElementId(element, newValue) {
    const previousElement = document.getElementById(element);
    previousElement. innerText = newValue;
}


function getTotalBlance() {
    const subTotalBlancePhone= getSubTotalBlance('phone-blance')
    const subTotalBlanceCase= getSubTotalBlance('case-blance')
    const totalBlance = subTotalBlancePhone + subTotalBlanceCase;
    getSetElementId('sub-total', totalBlance);

    // tptal tesk 
    const totalTeskString = (totalBlance * 0.1).toFixed(2);
    const totalTesk =parseFloat(totalTeskString)
    getSetElementId('tesk-total', totalTesk);
    
    // final total blance
    const finalTotalBlance = totalBlance + totalTesk;
    getSetElementId('finel-total', finalTotalBlance)
}
 
