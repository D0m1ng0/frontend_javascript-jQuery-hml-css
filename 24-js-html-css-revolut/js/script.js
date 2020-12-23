$( document ).ready(function() {
  console.log("ciao");

  // effetti al passaggio del mouse

  $('.header-menu li').mouseenter(
    function(){
      $(this).children("a").css({"color" : "black"
      });
    }

  );
  $('.header-menu li').mouseleave(
    function(){
      $(this).children("a").css({"color" : ""
      });
    }

  );
  ////////////////////////////////
  $('.parent-dropdown').mouseenter(
    function(){
      $(this).children(".dropdown").show(

        // errore:
        // function(){
        //           $('.parent-dropdown > a').mouseenter(
        //             function(){
        //               $(this).children("a").css({"color" : "yellow"
        //               });
        //             }
        //           );
        // }

      );
      console.log($(this));

      $(this).children("a").css({"color" : "black"
      });
    }

  );
  ////////////////////////////////
  $('.parent-dropdown').mouseleave(
    function(){
      $(this).children(".dropdown").hide();
      console.log($(this));

      $('a').css({"color" : ""
      });
    }

  );
  ////////////////////////////////
  $('.main-nav-right .main-menu li').mouseenter(
    function(){
      $('.btn').css({"background-color" : "rgb(52, 52, 52)"
      });
    }

  );
  $('.main-nav-right .main-menu li').mouseleave(
    function(){
      $('.btn').css({"background-color" : ""
      });
    }

  );
  ////////////////////////////////
  $('.jumbo-right').mouseenter(
    function(){
      $('#layover').fadeIn(100);
    }

  );
  $('.jumbo-right').mouseleave(
    function(){
      $('#layover').fadeOut(100);
    }

  );

  //effetti allo scroll della pagina;

  $(window).scroll(function(){

   if($(document).scrollTop() > 64) {
        $('.main-container-nav').css({"position" : "fixed", "top": "0px", "height" : "88px",   "filter" : "drop-shadow(0 1px 3px #ccc)", "width" : "100%"
        });
    }

    if($(document).scrollTop() < 64) {
        $('.main-container-nav').css({"position" : "", "top": "-64px", "height" : "", "filter" : ""
        });

    }

    // if($(document).scrollTop() > 400) {
    //      $('.main-container-nav').css({"position" : "", "top": "", "height" : "", "width" : ""
    //      });
    //  }

  });

  //effetto di comparsa del menu hamburger
  $('.main-nav-right > a').click(
    function(){
      $('.hamburger-menu').show();
    }
  );

  $('.close').click(
    function(){
      $('.hamburger-menu').hide();
    }
  );

  console.log("ciao");




});
