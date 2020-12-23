//Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
//Se è <= 5 il quadrato diventa giallo,
//se è > di 5 il quadrato diventa verde.
//Il numero ottenuto appare al centro del quadrato

  //TENTATIVO METODO SENZA one()
  // function squareClickListener() {
  //   var square = $('.active');
  //   square.click(getRandomNumber);
  // }
  // function getRandomNumber() {
  //
  //   activeSquare = $(this);
  //   activeSquare.html('');
  //
  //   $.ajax({
  //     url: "https://flynn.boolean.careers/exercises/api/random/int",
  //     method: "GET",
  //     success: function(data, state) {
  //
  //       var success = data["success"];
  //       var value = data["response"];
  //
  //       if(success) {
  //         if(value <=5) {
  //           activeSquare.addClass('yellow');
  //           activeSquare.append(value);
  //
  //         }
  //         else if(value > 5) {
  //           activeSquare.addClass('green');
  //           activeSquare.append(value);
  //         }
  //
  //       activeSquare.removeClass('active');
  //
  //       }
  //
  //     },
  //     error: function(data, request, error) {
  //       console.log("");
  //
  //     }
  //   });
  // }

// METODO CON one()
function squareClickListener() {
  var square = $('.active');
  square.one('click',getRandomNumber);
}
function getRandomNumber() {

  activeSquare = $(this);
  activeSquare.html('');

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function(data, state) {

      var success = data["success"];
      var value = data["response"];

      if(success) {
        if(value <=5) {
          activeSquare.addClass('yellow');
          activeSquare.append(value);

        }
        else if(value > 5) {
          activeSquare.addClass('green');
          activeSquare.append(value);
        }

      }

    },
    error: function(data, request, error) {
      console.log("");

    }

  });

}

function init() {
  // console.log("ciao");
  squareClickListener();
}

$(document).ready(init);
