const billAmount = document.getElementById('bill');
const tipPercent = document.getElementsByName('select-tip');
const cusTipPercent = document.getElementById('custom');
const numPeople = document.getElementById('people');

function doThis(){
    let tipPercentVal;

    for(let i = 0; i < tipPercent.length; i++){
        if(tipPercent[i].checked){
            // console.log(tipPercent[i].value);
            tipPercentVal = tipPercent[i].value;
        }
    }

    if(cusTipPercent.value){
        tipPercentVal = cusTipPercent.value;
    }

    let tipPerson = (billAmount.value*tipPercentVal/100)/numPeople.value;
    document.getElementById('tip-amount').textContent = tipPerson.toFixed(2);

    let totalPerson = billAmount.value/numPeople.value + tipPerson;
    document.getElementById('total-amount').textContent = totalPerson.toFixed(2);

    // billAmount.value = '';
    // numPeople.value = '';
    // cusTipPercent.value = '';
}


billAmount.oninput = () => {doThis()};
numPeople.oninput = () => {doThis()};
tipPercent.oninput = () => {doThis()};
cusTipPercent.oninput = () => {doThis()};


