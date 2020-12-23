/*Script che chiede all'utente il numero di chilometri che egli vuole percorrere e la sua età. Con queste informazioni lo script calcola il prezzo totale del viaggio*/

//Inserisci i km che vuoi percorrere
var kmToRun = prompt("Gentile utente, inserisci i chilometri che vorresti percorrere");
  //debug
  console.log(kmToRun);

//Inserisci la tua età
var age = prompt("Ora, insersci tua età");
  //debug
  console.log(age);

//Calcolo del prezzo totale intero del biglietto da viaggio
var prezzoEuroKm = 0.21 //euro al km
var prezzo = prezzoEuroKm*kmToRun;
  //debug
  console.log(prezzo);

//Calcolo del prezzo scontato a seconda dell'eta' tramite struttura condizionale
if (age < 18) {
  var prezzoScontatoMinori18 = prezzo*(0.8);
  document.getElementById('title').innerHTML = "  Il prezzo del biglietto ridotto del 20% è : " + prezzoScontatoMinori18.toFixed(2) + " euro";
    //debug
    console.log(prezzoScontatoMinori18);
} else if  ((17 < age) && (age < 65)) {
  document.getElementById('title').innerHTML = "Il prezzo del biglietto non ridotto è : " + prezzo.toFixed(2) + " euro";
    //debug
    console.log(prezzo);
} else {
  var prezzoScontatoMaggiori65 = prezzo*(0.6);
  document.getElementById('title').innerHTML = "Il prezzo del biglietto ridotto del 40% è : " + prezzoScontatoMaggiori65.toFixed(2) + " euro";
    //debug
    console.log(prezzoScontatoMaggiori65);
}
