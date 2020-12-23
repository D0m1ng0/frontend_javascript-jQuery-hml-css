// script che crea il biglietto del treno personale scontato oppure no inserenso i km da percorrere e la propria categoria di età

// definisco evento al click sul form compilato ed evento annulla
var createTicket = document.getElementById("ticketCreate");
var resetTicket = document.getElementById("ticketReset");
createTicket.addEventListener("click", function () {
  var priceKm = 0.21;
  var ticketPrice;
  var nameUser = document.getElementById("nameUser").value;
  // debug
  console.log(nameUser);
  var Km = document.getElementById("Km").value;
  // debug
  console.log(Km);
  var ageCategory = document.getElementById("ageCategory").value;
  // debug
  console.log(ageCategory);

  if (ageCategory == "Minorenne") {
    ticketPrice = priceKm*Km*(0.8);
    // debug
    console.log(ticketPrice);

  } else if (ageCategory == "Adulto") {
    ticketPrice = priceKm*Km;
    // debug
    console.log(ticketPrice);
  } else {
    ticketPrice = priceKm*Km*(0.6);
    //debug
    console.log(ticketPrice);
  }

// creazione di numeri random fra 2 estremi per il numero del treno e la carrozza
  var minTrain = 900;
  var maxTrain = 1000;
  var minCoatch = 2;
  var maxCoatch = 10;

  var trainNumber= Math.floor(Math.random()*(maxTrain - minTrain +1)) + minTrain;
  // debug
  console.log(trainNumber);
  var Coatch = Math.floor(Math.random()*(maxCoatch - minCoatch +1)) + minCoatch;
  // debug
  console.log(Coatch);

// descrivo l'azione dello script sugli elementi di tipo inner HTML
  document.getElementById("passenger").innerHTML = nameUser;
  document.getElementById("numberTrain").innerHTML = trainNumber;
  document.getElementById("coatch").innerHTML = Coatch;
  document.getElementById("priceTicket").innerHTML = ticketPrice + " " + "euro";
  document.getElementById("passengerCategory").innerHTML = ageCategory;

// azione per mostra tabella
  document.getElementById("ticketTable").className = "show";
});

// azione per reset form
resetTicket.addEventListener("click", function () {
  document.getElementById("nameUser").value = "";
  document.getElementById("Km").value = "";
  document.getElementById("ageCategory").value = "Adulto";
  document.getElementById("ticketTable").className = "hidden";
})
