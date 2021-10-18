const inputWord = prompt('insert a word: ');

function isPalindrome(word){
    let orderedArray = "";
    for (let i = word.length; i > 0; i--) {
        orderedArray = orderedArray + word[i - 1];
    }
    if(orderedArray === word){
        return true;
    }else{
        return false;
    }
}

if(isPalindrome(inputWord)){
    document.write(`${inputWord}  is a palindrome`);
}else{
    document.write(`${inputWord}  is not palindrome`);
}