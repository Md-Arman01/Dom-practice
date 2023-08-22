document.getElementById('double-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field')
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    const doubleInput = inputFieldNumber * 2;
    if(isNaN(doubleInput)){
        alert('please provide a number')
    }
    const display = document.getElementById('display');
    const displayNumberString = display.innerText;
    const displayNumber = parseFloat(displayNumberString)

    display.innerText = doubleInput;

    

    inputField.value = '';


    console.log(display)


})

document.getElementById('triple-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field')
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    const tripleInput = inputFieldNumber * 3;

    if(isNaN(tripleInput)){
        alert('please provide a number')
    }
    const display = document.getElementById('display');
    const displayNumberString = display.innerText;
    const displayNumber = parseFloat(displayNumberString)

    display.innerText = tripleInput;

    inputField.value = '';


    console.log(display)


})

