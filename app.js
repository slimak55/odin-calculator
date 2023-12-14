const calculate = document.querySelector('.process');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number');
const signs = document.querySelectorAll('.signs');
const deleteAll = document.querySelector('#ac');
const deleteOne = document.querySelector('#delete');
const count = document.querySelector('#op');
const idk = document.querySelector('#idk');
const change = document.querySelector('#change');

const equation = {
    number_1: 0,
    sign:" ",
    number_2: 0
}

function numbers(button){
    if(display.childNodes.length > 0){
        display.textContent = "";
    }

    if(equation.sign == " "){

        if (equation.number_1 == 0){
            equation.number_1 = button.target.value;
            const text = document.createTextNode(equation.number_1);
            display.appendChild(text);
        }
        else{
            equation.number_1 =  equation.number_1 + button.target.value;
            const text = document.createTextNode(equation.number_1);
            display.appendChild(text);
        }
    }
    else{
        if (equation.number_2 == 0){
            equation.number_2 = button.target.value;
            const text = document.createTextNode(equation.number_2);
            display.appendChild(text);
        }
        else{
            equation.number_2 =  equation.number_2 + button.target.value;   
            const text = document.createTextNode(equation.number_2);
            display.appendChild(text);
        }

    }
}

function sign(signV){
    if(equation.sign == " "){
        equation.sign = signV.target.value;
    }
    else{
        operate();
        equation.sign = signV.target.value;
    }

}



function reset(){
    equation.number_1 = 0;
    equation.sign = " ";
    equation.number_2 = 0;

    display.textContent = "0";

}
function deleteOneNumber(){
    if(equation.sign == " "){

        display.textContent = "";

        if(equation.number_1.length > 1){
            equation.number_1 = equation.number_1;
            equation.number_1 = equation.number_1.slice(0, equation.number_1.length - 1);
        }
        else{
            equation.number_1 = 0;
        }
        const text = document.createTextNode(equation.number_1);
        display.appendChild(text);
    }
    else{
        
        display.textContent = "";

        if(equation.number_2.length > 1){
            equation.number_2 = equation.number_2.slice(0, equation.number_2.length - 1);
        }
        else{
            equation.number_2 = 0;
        }
        const text = document.createTextNode(equation.number_2);
        display.appendChild(text);
    }
    
}


function add()
{   
    equation.number_1 = parseFloat(equation.number_1) + parseFloat(equation.number_2);
    equation.number_2 = 0;
    equation.sign = " ";
    displayText();
}

function subtract(){
    equation.number_1 = parseFloat(equation.number_1) - parseFloat(equation.number_2);
    equation.number_2 = 0;
    equation.sign = " ";
    displayText();
}

function multiply(){
    equation.number_1 = parseFloat(equation.number_1) * parseFloat(equation.number_2);
    equation.number_2 = 0;
    equation.sign = " ";
    displayText();
}
function divide(){
    if(equation.number_2 == 0){
        reset();
        display.textContent = "Nice try Joker!";
    }
    else{
        equation.number_1 = parseFloat(equation.number_1) / parseFloat(equation.number_2);
        equation.number_2 = 0;
        equation.sign = " ";
        equation.number_1 = parseFloat(equation.number_1).toFixed(2);
        displayText();

    }
}

function displayText(){
    equation.number_1 = parseFloat(equation.number_1).toFixed(2);
    const text = document.createTextNode(equation.number_1);
    display.appendChild(text);
}


function signChange(){
    if(equation.sign == " "){
        display.textContent = " ";
        equation.number_1 = parseFloat(equation.number_1) * -1;
        displayText();

    }
    else{
        display.textContent = " ";
        equation.number_2 = parseFloat(equation.number_2) * -1;
        equation.number_2 = parseFloat(equation.number_2).toFixed(2);
        const text = document.createTextNode(equation.number_2);
        display.appendChild(text);
    }
}


function operate(){

    if(display.childNodes.length > 0){
        display.textContent = "";
    }

    if(equation.sign == "+"){
        add();
    }
    else if(equation.sign == "-"){
        subtract();
    }
    else if(equation.sign == "*"){
        multiply();
    }
    else if(equation.sign == "/"){
        divide()
    }
}

function joke(){
    display.textContent = "5318008 ;)"
}

for ( const signV of signs) {
    signV.addEventListener('click',sign);
    }


for ( const button of buttons) {
    button.addEventListener('click',numbers);
    }

deleteAll.addEventListener('click', reset);
deleteOne.addEventListener('click', deleteOneNumber);
count.addEventListener('click', operate);
idk.addEventListener('click', joke);
change.addEventListener('click', signChange);