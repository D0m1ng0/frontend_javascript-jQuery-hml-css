// script per chidere all'utente il cognome che viene inserito in un array lista di cognomi la quale viene stamapata su schermo assieme alla posizione nell'array del cognome utente

// dichiarazione di un array di stringhe
var surnames = ["Fermi", "Majorana", "Witten", "Dirac", "Bohr"];

// chiedi nome e cognome e aggiungi il dato nell'array di stringhe
var surnameUser = prompt("Gentile utente, inserisci il cognome");
surnames.push(surnameUser);

surnames.sort();
console.log(surnames);
// ordina alfabeticamente il cognome tramite metodo .indexOf()
var positionSurname = surnames.indexOf(surnameUser) + 1;

// stampa su schermo la posizione del cognome utente nell'array esteso
console.log(positionSurname);
