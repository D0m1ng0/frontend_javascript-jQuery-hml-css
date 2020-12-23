//lo script fa scegliere all'utente fra pari o dispari e gli chiede di inserire un numero da 1 a 5. un secondo numero viene estratto dal pc tramite una funzione random e la somma dei 2 numeri viene valutata pari o dispari tramite una funzione; in tal modo discrimino chi ha vinto.

//input dell'utente e fisso una condizione per pari e dispari
var EvenOddNumberUser = parseInt(prompt("scegli fra pari p o dispari d scegliendo un numero fra 1 e 5"));
console.log(EvenOddNumberUser);
var EvenNumberUser;

//converto l'input utente in booleano in modo tale che pari sia valore booleano true
if (EvenOddNumberUser % 2 == 0) {
  EvenNumberUser = true; //numbero utente pari
} else {
  EvenNumberUser = false; //numero utente dispari
};
console.log(EvenNumberUser);

//dichiaro variabile numero random da 1 a 5
var numberComputer = getRandomIntInclusive(1,5);
console.log(numberComputer);

//calcolo il risultato della funzione somma dei due numeri
var sumNumbers = sum(EvenOddNumberUser, numberComputer);
console.log("la somma dei due numeri è " + sumNumbers);

//discrimino chi ha vinto
  if (sumNumbers% 2 == 0 && EvenNumberUser == true) {
    console.log("è patta")
  } else if (sumNumbers % 2 == 0 && EvenNumberUser == false ) {
    console.log("è patta")
  }
    else if (sumNumbers % 2 == 1 && EvenNumberUser == true) {
      console.log("vince pari cioè l'utente");
  } else {
    console.log("vince pari cioè il pc");
  }

//funzione che somma il numero random del computer con quello inserito dall'utente
function sum(num1, num2) {
  var risultato = num1 + num2;
  return risultato;
}

//funzione numeri random fra due estremi inclusi
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
