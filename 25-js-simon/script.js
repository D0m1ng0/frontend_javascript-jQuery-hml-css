console.log("Game : MEMO NUMERI RANDOM");

//genero 5 numeri casuali ed un alert li mostra
var pcRandomNumbers = [];
for(var i = 0; i < 5; i++) {
  var randomNumber = getRandomIntInclusive(1, 100);
  pcRandomNumbers.push(randomNumber);
  var u = 0;
  while (u < pcRandomNumbers.length && findInArray(pcRandomNumbers, randomNumber) == false) {
    if (findInArray(pcRandomNumbers, randomNumber) == false) {
      pcRandomNumbers.push(randomNumber);
    u++;
    }
  }
}
alert(pcRandomNumbers);

//parte un timer di 3 secondi.
//dopo 30 secondi l'utente deve inserire i numeri che ha visto in precedenza.
//inseriti tutti i numeri, lo script dice quanti e quali numeri sono stati individuati

var initialNumber = 3;
var countDown = setInterval(timingAndGame, 1000);

//FUNCTIONS AND FUNCTION GAME
  //funtion random numbers
  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
  //funtion find in array
  function findInArray(array, elementArray) {
  var e=0;
  var found=false;
  while(e < array.length && found == false){
    if(array[e] == elementArray) {
    found = true;
    }
    e++;
  }
  return found;
}
  //funtion timing and game
  function timingAndGame() {
  if(initialNumber == 0) {
    alert("ora devi indovinare i numeri");
    var numbersUser = [];
    w = 0;
      while( w < 5 ) {
        var numberUser = parseInt(prompt("inserisci un numero"));
        numbersUser.push(numberUser);
        w++;
      }

      console.log("i numeri inseriti sono " + numbersUser);

    var rightNumbers = [];
    var n = 0;
      while (n < 5) {
        if (findInArray(pcRandomNumbers, numbersUser[n]) == true) {
          rightNumbers.push(numbersUser[n]);
        }
        n++;
      }

    if(rightNumbers.length == 0) {
      console.log("non hai indovinato alcun numero");
    } else {
      console.log("i numeri individuati sono " + rightNumbers.length + " e sono " + rightNumbers);
    }
    clearInterval(countDown);

  }
  else if(initialNumber > 0) {
    console.log(initialNumber);
    initialNumber--;
  }
}
