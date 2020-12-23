// script che crea una semplice password coi dati immessi

// richiesta di immissione dati nome, cognome e anno di nascita

var nome = prompt ("Per creare la tua password per favore inserisci il tuo nome");
var cognome  = prompt ("ora, inserisci il tuo cognome");
var colorePreferito = prompt ("infine, inserisci il tuo colore preferito");
var booleanNumber = "19";

// creazione della paswword
var password = nome + cognome + colorePreferito + booleanNumber;

// comunicazione della pasword generata
document.getElementById('psw').innerHTML = "La tua non-molto-sicurissima password personale è " + password;
