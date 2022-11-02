const divisibility = prompt ('Scegli pari o dispari').toLowerCase;
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
let randomPc = randomNumber (1,5);
let sum = userNumber + randomPc;
const eleResult = document.querySelector('.result')
eleResult.innerHTML = winner();


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function winner (){
    if ((sum % 2 == 0) && (divisibility.length = 'pari')){
      Result= 'Hai vinto';
      return  Result;
    } else if ((sum % 2 != 0) && (divisibility.length = 'dispari')) {
      Result= 'Vince il pc';
    }
    return  Result;
}  



