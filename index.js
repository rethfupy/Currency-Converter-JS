const valueNode = document.querySelector('.value-input');
const baseCurrencyNode = document.querySelector('.baseCurrency');
const convertToCurrencyNode = document.querySelector('.convertToCurrency');
const output = document.querySelector('.value-output');

valueNode.addEventListener('input', calculate, false);
baseCurrencyNode.addEventListener('change', calculate, false);
convertToCurrencyNode.addEventListener('change', calculate, false);

function calculate(){
    const value = Number(valueNode.value);
    const baseCurrency = (document.querySelector('.baseCurrency')).value;
    const convertToCurrency = (document.querySelector('.convertToCurrency')).value;

    if(baseCurrency == convertToCurrency){
        alert("Please pick a different currency to convert");
        return false;
    }

    const API = "https://api.exchangerate.host/convert?from=" + baseCurrency + "&to=" + convertToCurrency;
    
    fetch(API)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let request = data;
            let rate = request.result;
            let result = (value * rate).toFixed(2);
            output.value = result;
        });
}
