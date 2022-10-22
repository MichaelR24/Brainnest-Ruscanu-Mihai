//content display

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
    const buttonInnerDiv=document.createElement('div');
    
    switch (i) {
        case 1:
                Button.setAttribute('onclick','clearDisplay();regain()');
                Button.classList.add('calculator-button','operator-signs');
                buttonInnerDiv.textContent = "AC";
            break;
        case 2:
            Button.setAttribute('onclick','addMinus();ability()');
            Button.setAttribute('value','+/-');
            Button.classList.add('calculator-button','off','operator-signs', 'math');
            buttonInnerDiv.textContent = "+/-";
            break;
        case 3:
            Button.setAttribute('onclick','storeValue(this.value);ability()');
            Button.setAttribute('value','%');
            Button.classList.add('calculator-button','off','operator-signs', 'math');
            buttonInnerDiv.textContent = "%";
            break;
        case 4:
            Button.setAttribute('onclick','storeValue(this.value);ability()');
            Button.setAttribute('value','/');
            Button.classList.add('calculator-button','off','operator-signs', 'math');
            buttonInnerDiv.textContent = "/";
            break;
        case 5:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','7');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "7";
            break;
        case 6:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','8');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "8";
            break;
        case 7:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','9');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "9";
            break;
        case 8:
            Button.setAttribute('onclick','storeValue(this.value);ability()');
            Button.setAttribute('value','*');
            Button.classList.add('calculator-button','off','math','operator-signs');
            buttonInnerDiv.textContent = "*";
            break;
        case 9:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','4');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "4";
            break;
        case 10:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','5');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "5";
            break;
        case 11:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','6');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "6";
            break;
        case 12:
            Button.setAttribute('onclick','storeValue(this.value);ability()');
            Button.setAttribute('value','-');
            Button.classList.add('calculator-button','off','operator-signs','math');
            buttonInnerDiv.textContent = "-";
            break;
        case 13:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','1');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "1";
            break;
        case 14:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','2');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "2";
            break;
        case 15:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','3');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "3";
            break;
        case 16:
            Button.setAttribute('onclick','storeValue(this.value);ability()');
            Button.setAttribute('value','+');
            Button.classList.add('calculator-button','off','operator-signs','math');
            buttonInnerDiv.textContent = "+";
            break;
        case 17:
            Button.setAttribute('onclick','displayNumber(this.value);regain()');
            Button.setAttribute('value','0');
            Button.classList.add('calculator-button','off','number','zero');
            buttonInnerDiv.textContent = "0";
            break;
        case 18:
            Button.setAttribute('value','.');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = ".";
            break;
        case 19:
            Button.setAttribute('onclick','backspace();regain()');
            Button.setAttribute('id','backspace');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "Backspace";
            break;
        case 20:
            Button.setAttribute('onclick','storeValue(this.value);internalError()');
            Button.setAttribute('value','=');
            Button.classList.add('calculator-button','off','number');
            buttonInnerDiv.textContent = "=";
            break;
        }
        numbersDiv.appendChild(Button);
        Button.appendChild(buttonInnerDiv);
}

//Application logic

function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
function modulo(a,b)
{
    return a%b;
}

function operate(operator,num1,num2){
    let result;
    switch(operator){
        case '+':
            result=addition(num1,num2);
            break;
        case '-':
            result=subtraction(num1,num2);
            break;
        case '*':
            result= multiplication(num1,num2);
            break;
        case '/':
            if(num2==0){
                result="Cannot divide by 0";
                break;
            }else{
            result=division(num1,num2);
            }
            break;
        case '%':
            result=modulo(num1,num2);
    }
    return result;
}
function internalError(){
    let displayStored = document.getElementById('numbers-display');
    let displayContent =  displayStored.innerText; 
    let numberButtons = document.querySelectorAll('.calculator-button');

    if(displayContent=='Internal error'){
        numberButtons.forEach((button) => {
            button.disabled=true;
        });
        numberButtons[0].disabled=false;
        numberButtons[19].disabled=false;
    }else if(displayContent==''){
        numberButtons.forEach((button) => {
            button.disabled=false;
        });
    }
}
function ability(){
    
    let displayStored = document.getElementById('numbers-display');
    let displayContent =  displayStored.innerText; 
    let length = displayContent.length;

    if(displayContent[length-1]=='+' || displayContent[length-1]=='-' || displayContent[length-1]=='*' || displayContent[length-1]=='/' || displayContent[length-1]=='%'){
        let buttons = document.querySelectorAll('.math');
        buttons.forEach((button) => {
            button.disabled=true;
        });
    }}

function regain(){
    let buttons = document.querySelectorAll('.math');
        buttons.forEach((button) => {
            button.disabled=false;
});}

function displayNumber(value){
    let display = document.querySelector('#numbers-display');
    display.textContent += value;
}

let sum=0;
let currentPosition=0;//current index position of the operator

function storeValue(value){

    let displayStored = document.getElementById('numbers-display');
    let displayContent =  displayStored.innerText; 

    if(displayContent.length==2 && displayContent[0]=='0' && (displayContent[1]==='1' || displayContent[1]==='2' || displayContent[1]==='3' || displayContent[1]==='4' || displayContent[1]==='5' || displayContent[1]==='6' || displayContent[1]==='7' || displayContent[1]==='8' || displayContent[1]==='9')){
        displayStored.textContent = "The number is not a real number";
    }
    else if(displayContent.length==0 && (value ==='+' || value==='-' || value==='*' || value==='/' || value==='%' || value==='.')){

        displayStored.textContent = "Insert a number first";
        let buttons = document.querySelectorAll('.off');
        buttons.forEach((button) => {
            button.disabled=true;
        });
        exit();
    }

    let num;
    let index1;    

    for(let i=currentPosition+1;i<displayContent.length;i++){
        
        if(displayContent[i]=='+' || displayContent[i]=='-' || displayContent[i]=='*' || displayContent[i]=='/' || displayContent[i]=='%'){ 
            index1=i;
            currentPosition=i;
            break;
        }
    }
    
    if (sum==0){
        num=displayContent.slice(0);
        sum=num;
        displayStored.textContent += value; 
    }
    else if(value!='='){
        if(!displayContent.includes('+') && !displayContent.includes('-') && !displayContent.includes('*') && !displayContent.includes('/') && !displayContent.includes('%')){
            sum=displayContent.slice(0);
        }else{
        num=displayContent.slice(currentPosition+1);
        sum=operate(value,parseInt(sum),parseInt(num));
        }
        displayStored.textContent += value; 
    }

    if(value=='=' && displayContent.length==0){
    displayStored.textContent = "Internal error";
    }
    else{ 
    if(value=='=' && displayContent.length>0){
    num=displayContent.slice(index1+1);
    sum=operate(displayContent[index1],parseInt(sum),parseInt(num));
    displayStored.textContent = sum;
    currentPosition=0;
}}}

function clearDisplay(){
    let display = document.getElementById('numbers-display');
    display.textContent = '';
    sum=0;
    currentPosition=0;
    let buttons = document.querySelectorAll('.off');
        buttons.forEach((button) => {
            button.disabled=false;
        });
}

function backspace(){
    let display = document.getElementById('numbers-display');
    let displayContent =  display.innerText;
    display.textContent = displayContent.slice(0,-1);
}

function addMinus(){
    let display = document.getElementById('numbers-display');
    let displayContent =  display.innerText;
    display.textContent = '-'+displayContent;
}

document.addEventListener('keypress', (event) => {
    switch(event.key){
        case '1':
            displayNumber(1);
            break;
        case '2':
            displayNumber(2);
            break;
        case '3':
            displayNumber(3);
            break;
        case '4':
            displayNumber(4);
            break;
        case '5':
            displayNumber(5);
            break;
        case '6':
            displayNumber(6);
            break;
        case '7':
            displayNumber(7);
            break;
        case '8':
            displayNumber(8);
            break;
        case '9':
            displayNumber(9);
            break;
        case '0':
            displayNumber(0);
            break;
        case '+':
            storeValue('+');
            break;
        case '-':
            storeValue('-');
            break;
        case '*':
            storeValue('*');
            break;
        case '/':
            storeValue('/');
            break;
        case '%':
            storeValue('%');
            break;
        case '=':
            storeValue('=');
            break;
        case 'Enter':
            storeValue('=');
            break;
        case 'Backspace':
            backspace();
            break;
        case '.':
            displayNumber('.');
            break;
        case 'c':
            clearDisplay();
            break;
        } 
  }, false);