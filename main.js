//get button
const button = document.querySelector('button');
//get text field
const textField = document.querySelector('input');
//get output h1
const outputH1 = document.querySelector('h1');

function isPalindrome(word){
    //new array with reverse indexes
    let orderedArray = "";
    //add chars to orderedArray from the last char of the given word
    for (let i = word.length; i > 0; i--) {
        orderedArray = orderedArray + word[i - 1];
    }
    //if old word and new word are equals
    if(orderedArray === word){
        return true;
    }else{
        return false;
    }
}

button.addEventListener("click", function(){
    //get inserted word
    const textFieldValue = textField.value;
    //error handler
    if(textFieldValue === ""){
        outputH1.textContent = 'Insert a valid word'
    }else{//if no errors
        if(isPalindrome(textFieldValue)){//if the word is a palindrome
            outputH1.innerHTML = `<span class="text-secondary fw-5">${textFieldValue}</span>  is a palindrome`;
        }else{//if the word is not a palindrome
            outputH1.innerHTML = `<span class="text-secondary fw-5">${textFieldValue}</span>  is not a palindrome`;
        }
    }
    //reset after click
    textField.value = null;
});
