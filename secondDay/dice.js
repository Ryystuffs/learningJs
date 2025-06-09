const diceInput = document.getElementById("diceInput");
const diceBtn = document.getElementById("diceBtn");
const diceResult = document.getElementById("diceResult");
const diceImg = document.getElementById("diceImg");
const values = [];
const img = [];

function diceProceed(){
    if (diceInput.value !== '' && Number(diceInput.value) !== 0){
        values.length = 0;
        img.length = 0;
        for (let i = 0; i < Number(diceInput.value); i++){
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            img.push(`<img src = img/${value}.png>`)
        }
        diceResult.textContent = (`Dices: ${values.join(', ')}`);
        diceImg.innerHTML = img.join('');
    }else {
        diceResult.textContent = "ENTER A VALUE";
    }
}
diceBtn.addEventListener('click', () => {
    diceProceed();
});

diceInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter"){
        diceProceed();
    }
});


