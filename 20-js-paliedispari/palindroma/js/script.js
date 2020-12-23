//script che chiede all'utente di inserire una parola che tramite una funzione ben definita comprende se la parola è palindroma

console.log("Questo script discrimina una parola palindroma da una parola normale");

//l'utente inserisce una parola
var wordUser = prompt("Inserisci una parola");
console.log(wordUser);

//la parola viene preda da una funzione e che la ribalta
var palindromeUser = palindromeBot(wordUser);
console.log(palindromeBot(wordUser));

//condizione di uguaglianza oppure no delle due parole
if(wordUser == palindromeUser) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}


//funzione che ribalta una parola data
function palindromeBot(word) {
  var wordCheck = "";
  for(var i = word.length-1; i >= 0; i--) {
    wordCheck += word[i];
  }
  return wordCheck;
}
