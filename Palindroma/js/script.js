const userWord = prompt("Inserisci una parola palindroma");

let revWord = checkWord(userWord);
console.log(revWord)
const eleConfirmation = document.querySelector ('.confirmation');


if (userWord == revWord){
    eleConfirmation.innerHTML = 'è palindroma';
}else{
    eleConfirmation.innerHTML = 'stai sbagliando parola';
}

function checkWord (word) {
    let splitString = word.split("");
    let reverseArray = splitString .reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

