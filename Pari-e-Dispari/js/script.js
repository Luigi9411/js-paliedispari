let divisibility = prompt ('Scegli pari o dispari').toLowerCase();
let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
let randomPc = randomNumber (1,5);
let sum = userNumber + randomPc;
let evenSum = evenSume(sum);
console.log(sum);
let eleResult = document.querySelector('.result')


if (isDivisible(sum,divisibility)) {
  eleResult.innerHTML = 'Hai vinto';
} else {
  eleResult.innerHTML = 'Ha vinto il pc';
}



function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

 function evenSume (sum){
 if (sum % 2 == 0){
   sum = 'pari';
   console.log('pari');
 } else {
  sum = 'dispari';
   console.log('dispari');
 }
 }


function isDivisible(number,divisibility){
  if ((divisibility === 'pari' && number % 2 === 0) || (divisibility === 'dispari' && number % 2 !== 0)){
    return true;
  }
    return false;
}
