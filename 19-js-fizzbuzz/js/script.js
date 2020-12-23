//script che crea un array di numeri da 1 a 100 tale che al posto dei multi solo di 3 inserisce "Fizz" e al pasto dei multipli di 5 inserisce "Buzz", mentre invece nei multipli sia di 3 che di 5 inserisce "FizzBuzz"

//creazione di un array vuoto
var numbers_0_100 = [];

// riempimento dell'array vuoto con un ciclo for
for (var i=0; i<100;i++) {
  number = i+1;
  numbers_0_100.push(number);
  if(number % 3 == 0 && number % 5 == 0 ) {
   numbers_0_100[i] = "FizzBuzz";
  } else if(number%3==0) {
    numbers_0_100[i] = "Fizz";
  }else if (number % 5 == 0) {
    numbers_0_100[i] = "Buzz";
  }

}
//output dell'array modificato
console.log(numbers_0_100);
