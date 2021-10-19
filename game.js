//get button
const gameButton = document.querySelector('#game-section button');
//get number field
const numberField = document.querySelector('#game-section input');
//get select field
const selectField = document.querySelector('#game-section select');
//get output h1
const output = document.querySelector('#game-section h1:nth-child(2)');


function isEven(number){
    if(number%2 === 0)
        return true
    else
        return false
}

gameButton.addEventListener('click', () => {
    const numberValue = numberField.value
    const span =  document.querySelector('#game-section span');
    if(numberValue > 6 || numberValue < 0 || isNaN(numberValue)){
        span.textContent = 'min-0 max-6 number';
        span.classList.add('bg-danger');
    }else{
        const parity = selectField.value
        const randNumber = Math.floor(Math.random() * 5);
        const sum = parseInt(numberValue)+parseInt(randNumber);
        if(parity === "true"){
            if(isEven(sum))
                output.innerHTML = `you won! <br> server generated: ${randNumber} <br> the sum is: ${sum}`
            else
                output.innerHTML = `you lost! <br> server generated: ${randNumber} <br> the sum is: ${sum}`
        }else{
            if(isEven(sum))
                output.innerHTML = `you lost! <br> server generated: ${randNumber} <br> the sum is: ${sum}`
            else
                output.innerHTML = `you won! <br> server generated: ${randNumber} <br> the sum is: ${sum}`
        }
    }
});