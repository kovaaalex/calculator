const numbers = document.querySelectorAll('.number')
const result = document.querySelector('.result')
const point = document.querySelector('.point')
const operations = document.querySelectorAll('.operation')
const equal = document.querySelector('.equal')
const btn = document.querySelectorAll('.btn')
const clear = document.querySelector('#clear')
const operators = ['+', '−', '×', '÷', '%']
const plusMinus = document.querySelector('#plus-minus')
let operation = "", tempValue = "0", value = "", pointActive = false, isOperation = false, lastButton = "", hasEqual = false

const themeSwitch = document.getElementById('theme')

themeSwitch.addEventListener('click', () => {
    themeSwitch.classList.toggle('night')
    document.body.classList.toggle('night__theme')
})

numbers.forEach(number => number.addEventListener('click', () => {
    addNumber(number.innerHTML)
    lastButton = 'number'
}))
operations.forEach(operation => operation.addEventListener('click', () => {
    addOperation(operation.innerHTML)
    lastButton = 'operation'
}))
point.addEventListener('click', () => {
    addPoint()
    lastButton = 'point'
})
equal.addEventListener('click', () => {
    countValue()
    isOperation = false
    lastButton = 'equal'
    hasEqual = true
    }
)
clear.addEventListener('click', clearAll)

function addNumber(number){
    if(isOperation && operators.includes(result.innerHTML[result.innerHTML.length - 1])) tempValue = ""
    if(tempValue === "0") tempValue = number
    else tempValue += number
    result.innerHTML = tempValue
}
function addPoint(){
    if (pointActive) return
    tempValue += "."
    result.innerHTML = tempValue
    pointActive = true
}

function addOperation(op) {

    if (isOperation) {
        countValue();
        result.innerHTML += op;
        operation = op;
        return;
    }

    if (tempValue[tempValue.length - 1] === '.') tempValue += '0';
    
    pointActive = false;
    operation = op;
    if (lastButton === 'equal' && tempValue !== "" && value !== "") {
        result.innerHTML = value + op;
    }
    else{
    value = tempValue;
    result.innerHTML = tempValue + op;
    }
    tempValue = "";
    isOperation = true;
}

function checkDivisionByZero(){
    if (+tempValue === 0) {
        result.innerHTML = "Error"
        btn.forEach(but => {
            but.disabled = true
            but.style.opacity = '0.1'
        })
        clear.style.opacity = '1'
        clear.disabled = false
        return true
    }
    return false
}
function countValue(){
    switch (operation) {
        case '+':{
            value = +value + +tempValue
            break;
        }
        case '−':{
            value = +value - +tempValue
            break;
        }
        case '×':{
            value = +value * +tempValue
            break;
        }
        case '÷':{
            if(checkDivisionByZero()) return
            value = +value / +tempValue
            break;
        }
        case '%':{
            if(checkDivisionByZero()) return
            value = +value % +tempValue
            break;
        }
        default:
            break;
    }
    result.innerHTML = value
}

function clearAll(){
    tempValue = "0"
    value = ""
    result.innerHTML = "0"
    pointActive = false;
    btn.forEach(but => {
        but.style.opacity = "1"
        but.disabled = false
    })
    isOperation = false
    hasEqual = true
}

plusMinus.addEventListener('click', () => {
    changeSign();
    lastButton = 'plusMinus';
});

function changeSign() {
    if (lastButton === 'equal') {
        value = -value;
        result.innerHTML = value;
        tempValue = value;
    } else if (tempValue !== "") {
        tempValue = -tempValue;
        result.innerHTML = tempValue;
    }
}