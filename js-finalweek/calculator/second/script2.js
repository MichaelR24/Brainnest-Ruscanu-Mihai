const container = document.createElement('div');
container.setAttribute('id','container');
document.body.appendChild(container);

const calcContainer = document.createElement('div');
calcContainer.setAttribute('id','calculator-container');
container.appendChild(calcContainer);

const numbersDisplay = document.createElement('div');
numbersDisplay.setAttribute('id','numbers-display');
calcContainer.appendChild(numbersDisplay);

const numbersDiv = document.createElement('div');
numbersDiv.setAttribute('id','numbers-div');
calcContainer.appendChild(numbersDiv);

for (let i=1;i<=20;i++){
    const Button = document.createElement('button');
    Button.classList.add('calculator-button');
    Button.textContent = i;
    if (i==1){
        Button.setAttribute('onclick','clearDisplay()');
    }
    numbersDiv.appendChild(numberButton);
}