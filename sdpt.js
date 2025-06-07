const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

lastResult = '';
 
function celsiusToFahrenheit() {
    lastResult = ((Number(textBox.value.trim()) * 9/5) + 32).toFixed(2);
    result.textContent = lastResult;
}

function fahrenheitToCelsius() {
    lastResult = ((Number(textBox.value.trim()) -32) * 5/9).toFixed(2);
    result.textContent = lastResult;
}

function convertion(){
    if (Number(textBox.value) !== 0 && textBox.value.trim() !== ''){
        if (toFahrenheit.checked){
            celsiusToFahrenheit();
        }
        else if (toCelsius.checked){
            fahrenheitToCelsius();
        }
        else {
            result.textContent = "Please select the conversion type";
        }
    }else{
         result.textContent = lastResult || "Please enter a value"; 
    }
}


submit.addEventListener ('click', (event) => {
    event.preventDefault();
    convertion();
    
}); 
textBox.addEventListener ('keydown', (event) => {
    if (event.key === 'Enter'){
        event.preventDefault();
        convertion();
    }
});