// function search contacts
function searchContacts() {
  $("#contacts-search-bar-input").on("keyup", function() {
    var valoreTastoPremuto = $(this).val().toLowerCase();
    $(".user-contact-box").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(valoreTastoPremuto) > -1)
    });
  });
}

// 1step : funzione di ascolto
function componingMsgListener() {
  var target = $('#main-search-bar-input');
  target.keyup(sendKeyupPressed);
}
// 2step : catturo pressione tasti e invio
function sendKeyupPressed(event) {
  var keyPressed = event.which;
  // console.log("tasto premuto", keyPressed);

  if(keyPressed === 13) {
    var inputSelected = $(this);
    var textInserted = inputSelected.val();
      if(textInserted.length > 0) {
        inputSelected.val("");
        console.log("testo catturato ", textInserted);

        sentMsgConsole(textInserted); // 3step DEBUG : su console

        setTimeout(function(){// step4 : messaggio bubble con ritardo
          sentMsgBubble(textInserted);
          // scrolling function : premendo il testo invia il box dei messaggi scrolla automaticamente
          $('.msg-box.active').animate({
            scrollTop: $('.msg-box.active').get(0).scrollHeight
          }, 1500);
        }, 150);

        setTimeout(function(){// step5 : arriva messaggio di risposta con ritardo
          gettinMsgBubble();

          $('.msg-box.active').animate({
            scrollTop: $('.msg-box.active').get(0).scrollHeight
          }, 1500);

        }, 3000);

      }

  }

}

// 3step DEBUG : funzione che stampa su console il messaggio catturato
function sentMsgConsole(messageChatched)   {
  console.log("inviato ", messageChatched);
}

// 4step : funzioni messaggi inviati con interazione input
function sentMsgBubble(textComposed) {
  var MsgWritten = $('.template-sent > .msg-user-flex.right').clone();
  var target = $('.msg-box.active');

  MsgWritten.find('p').text(textComposed);
  MsgWritten.find(".contact-time").text(getRightTime());

    //DA CHIEDERE
    // MsgWritten.find('#text').text(textComposed);
    // MsgWritten.find("#contact-time").text(getRightTime());

  target.append(MsgWritten);
}
//5step : funzioni messaggi ricevuti relativo a interazione input
function gettinMsgBubble() {
  var MsgReceived = $('.template-received > .msg-user-flex').clone();
  var target = $('.msg-box.active');

  MsgReceived.find("#contact-time").text(getRightTime());

  target.append(MsgReceived);
}

// function actual hour
function getRightTime() {
  var getDate = new Date();
  var time = getDate.getHours() + ":" + getDate.getMinutes();
  return time;
}


// funzioni test messaggi inviati ricevuti senza interazione input SOLO PER ESEMPIO - NON RICHIAMARE
function msgLeft() {
  console.log("stampo un messagio di sinistra")

  var leftMsg = $('.template-received > .msg-user-flex').clone();
  // leftMsg.txt("modifica col metodo txt");
  var target = $('.msg-box');

  target.append(leftMsg);
  // target.html(leftMsg);
}
function msgRight() {
  console.log("stampo un messagio di destra");

  var rightMsg = $('.template-sent > .msg-user-flex').clone();
  // leftMsg.txt("modifica col metodo txt");
  var target = $('.msg-box');

  target.append(rightMsg);
  // target.html(leftMsg);
}


// function contact selection an correspoding messages
function selectingContactListener() {
  var contact = $('.contacts-box .user-contact-box');
  contact.click(changeContactClick);
}
function changeContactClick() {
  var contactClicked = $(this);
  var idContactClicked = contactClicked.data('id');

  var contactsTarget = $('.contacts-box .user-contact-box');
  var conversationsTarget = $('.msg-box');
  var headersConversationsTarget = $('.chat-box-header');

  var conversationToSelection = $('.msg-box[data-id='+idContactClicked+']');
  var headerConversationToSelection = $('.chat-box-header[data-id='+idContactClicked+']');

        // if(typeof idContactClicked == 'number'){
        //   console.log(idContactClicked + " is not a number <br/>");
        //
        // }
        // else{
        // 	console.log(idContactClicked + " is not a number <br/>");
        // }

  contactsTarget.removeClass('active');
  contactClicked.addClass('active');

  //
  conversationsTarget.removeClass('active');
  conversationToSelection.addClass('active');

  headersConversationsTarget.removeClass('active');
  headerConversationToSelection.addClass('active');
}

//function delete messages with "Elimina messaggio"
function messageToRemoveListener() {
  var optionMessages = $('.dropdown-msg ul li:nth-child(6)');
  optionMessages.click(removeMsgToClick);
}
function removeMsgToClick() {
  var optionSelected = $(this);
  console.log(optionSelected);
  optionSelected.closest('.msg-user-flex').remove();
  // optionSelected.closest('.contact-time').remove();
}

// function show button options and function open message options to click
function messageOptionsListener() {
  var optionMessages = $(".parent-dropdown, .parent-dropdown-msg");
  optionMessages.click('click', openOptions);
}
function openOptions() {
  $(this).children(".dropdown, .dropdown-msg").show();
}
// function showButtonOptions( function() {
//     var buttonOptionShow = $('.msg-user');
//     buttonOptionShow.siblings('.msg-user-layover').show();
// })
//

// function mouse enter/leave : show options button and dropdown options of the menu
function mouseShowHideMenu() {

  // tentativo di far apparire il bottone menu messaggi al passaggio mouse
  // $('.msg-user').mouseenter(
  //   function() {
  //     $(this).siblings('.msg-user-layover').show();
  //   }
  // );

  // comparsa opzioni del bottone menu al passaggio mouse
  // $('.user-contact-box').mouseenter(
  //   function() {
  //     $(this).children('.user-contact-down .i-contact-menu').show();
  //   }
  // );

  $('.parent-dropdown, .parent-dropdown-msg').mouseenter(
    function(){
      // $(this).children(".dropdown").show();

      // VERIFICARE COSA SBAGLIO
      // $(this).children("li").css({"baxkground-color" : "red"
      // });

      // CORRETTO
      $('.dropdown ul li, .dropdown-msg ul li').mouseenter(
        function() {
          $(this).addClass('grey');
          // $(this).css({"background-color" : "#ebebeb"});
        }
      );
    }

  );

  // scomparsa del bottone opzioni all'allontamento mouse
  // $('.msg-user').mouseleave(
  //   function() {
  //     $(this).siblings('.msg-user-layover').hide();
  //   }
  // );

  $('.parent-dropdown, .parent-dropdown-msg').mouseleave(
    function(){
      $(this).children(".dropdown, .dropdown-msg").hide();
      // VERIFICARE COSA SBAGLIO
      // $('a , i').css({"color" : ""
      // });
      // CORRETTO CON CSS
      $('.dropdown ul li, .dropdown-msg ul li').mouseleave(
        function() {
          $(this).removeClass('grey');
          // all'uscita del mouse il li diventa rosso
          // $(this).css({"background-color" : "red"});
        }
      );
    }

  );

  // azione sulle varie opzioni
  $('li').mouseenter(
    function(){
      $(this).children('li').css({"background-color" : ""
      });
      console.log($(this));
    }

  );

  $('li').mouseleave(
    function(){
      $(this).css({"color" : ""
      });
    }

  );

}

// function change search to arrow
function selectingButtonListener() {
  var button = $('.contacts-search-bar button');
  button.click(searchToArrow);
}
function searchToArrow() {
    var  targetButton = $(this);
    var idButtonClicked = targetButton.data('id');
    console.log("questo è lid del bottone"+ idButtonClicked);

    var buttons = $(".contacts-search-bar button");

    if(idButtonClicked==0) {
      var changeButton = $('.contacts-search-bar button[data-id=1]');
      targetButton.removeClass('active');
      changeButton.addClass('active');
    }
    else if(idButtonClicked==1) {
      var changeButton = $('.contacts-search-bar button[data-id=0]');
      targetButton.removeClass('active');
      changeButton.addClass('active');
    }
}



// INIT funzione script
function init() {
  console.log("ciao mondo")
  // msgLeft();
  // console.log("ho clonato un mess ricevuto");

  // msgRight();
  // console.log("ho clonato un mess inviato");
  componingMsgListener();
  searchContacts();
  mouseShowHideMenu();
  selectingContactListener();
  messageToRemoveListener();
  messageOptionsListener();
  selectingButtonListener();

  mouseShowHideMenu();

}

$(document).ready(init);
