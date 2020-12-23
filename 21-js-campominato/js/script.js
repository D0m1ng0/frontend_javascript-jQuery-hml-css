// //Il computer deve generare 16 numeri casuali diversi tra 1 e 100.
//   var numbersPc = [];
//   //creo un array di numeri random
//   numbersPc.length = 0;
//   while (numbersPc.length < 16) {
//     var numbersPcElement = getRandomIntInclusive(1, 100);
//     if (findInArray(numbersPc, numbersPcElement) == false){
//       numbersPc.push(numbersPcElement);
//     }
//   }
//     //DEBUG
//     console.log(numbersPc);
//In seguito deve chiedere all’utente (100 - 95) volte di inserire un numero alla volta, sempre compreso tra 1 e 100


  // DEBUG ARRAY TEST DA CANCELLARE ALLA PULIZIA DEL CODICE
  var arrayTest = [1,2,3,4,5,6,7,8,9,10];
  // INSERISCO DEI NUMERI PER 3 VOLTE. LA PRIMA VOLTA IL NUMERO VIENE PRESO E CONFRONTATO CON GLI ELMENTI DI arrayTest, DOPODICHE' SE INSERISCO
  var numbersUser = [];
  var u = 0;
  while (u < 3 && findInArray(arrayTest, elementNumberUser) == false) {
    var elementNumberUser = parseInt(prompt("Inserisci un numero"));
    if (findInArray(arrayTest, elementNumberUser) == false && findInArray(numbersUser, elementNumberUser) == false) {
      numbersUser.push(elementNumberUser);
      console.log("l'hai scampata");
    u++; 
    } else if(findInArray(arrayTest, elementNumberUser) == false && findInArray(numbersUser, elementNumberUser) == true  ) {
      elementNumberUser = parseInt(prompt("Hai già usato questo numero, inseriscine un altro"));
    } else {
      console.log("gameover");
    }
    //DEBUG : ALLA FINE SISTITUIRE arrayTest CON numbersPc
  }
 //   while (numbersPc.length < 16) {
 //     var numbersPcElement = getRandomIntInclusive(1, 100);
 //     if (findInArray(numbersPc, numbersPcElement) == false){
 //       numbersPc.push(numbersPcElement);
 //     }
 //   }

// //Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//
// //La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//
// //Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//
//
//
//
//FUNZIONI GENERALI
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  }

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
