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

            if(cusTipPercent.value){
                tipPercent[i].checked = false;
            }
        }
    }

    if(cusTipPercent.value){
        tipPercentVal = cusTipPercent.value;
    }
    

    if(billAmount.value && numPeople.value > 0){
        let tipPerson = (billAmount.value*tipPercentVal/100)/numPeople.value;
        document.getElementById('tip-amount').textContent = tipPerson.toFixed(2);
    
        let totalPerson = billAmount.value/numPeople.value + tipPerson;
        document.getElementById('total-amount').textContent = totalPerson.toFixed(2);
        document.getElementById('error-zero').style.display = 'none';
        numPeople.classList.remove('error');
    }else if(numPeople.value == "0"){
        document.getElementById('error-zero').style.display = 'inline-block';
        numPeople.classList.add('error');
        document.getElementById('tip-amount').textContent = '0.00';
        document.getElementById('total-amount').textContent = '0.00';
    }

   
}

// function doThat(){
//     document.getElementById('error-zero').style.display = 'none';
// }


billAmount.oninput = () => {doThis()};
numPeople.oninput = () => {doThis()};
cusTipPercent.oninput = () => {doThis()};

for(let i = 0; i < tipPercent.length; i++){
    tipPercent[i].oninput = () => {
        cusTipPercent.value = '';
        doThis()
    };
}
// numPeople.onemptied = () => {doThat()};

function resetFields(){
    billAmount.value = '';
    numPeople.value = '';
    cusTipPercent.value = '';
    tipPercent[0].checked = true;
    document.getElementById('error-zero').style.display = 'none';
    document.getElementById('tip-amount').textContent = '0.00';
    document.getElementById('total-amount').textContent = '0.00';
    numPeople.classList.remove('error');
}

document.getElementById('reset').onclick = ()=>{
    resetFields();
}


// function avoidNonNumbers(evt){
//     return evt.keyCode === 8 || evt.keyCode === 46 ? true : !isNaN(Number(evt.key))
// }