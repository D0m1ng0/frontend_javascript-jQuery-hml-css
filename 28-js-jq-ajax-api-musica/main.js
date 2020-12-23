//Attraverso una chiamata ajax all'Api di boolean avremo a disposizione una decina di dischi musicali.
//Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.

function callInfoCds(){
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data) {
      // console.log(data);

      var success = data["success"];
      var cds = data["response"];

      // console.log("ecco i cd " + cds[1].title);
      printCds(cds);
    },
    error: function(err) {
      console.log("err", err);
    }
  });
}

function printCds(cds) {

  var template = $("#cd-template").html();
  var compiled = Handlebars.compile(template);
  var target = $(".cds-container.container");

  for(var i=0; i < cds.length; i++) {

    // console.log(cds[i].poster);
    // console.log(cds[i].title);
    // console.log(cds[i].author);
    // console.log(cds[i].genre);

    // console.log(cds[i]);

    // var cdAlbum = cds[i];
    //
    var albumHTML = compiled(
                      {
                      "poster" : cds[i].poster,
                      "title" : cds[i].title,
                      "author" : cds[i].author,
                      "genre" : cds[i].genre
                      }
                      // cdAlbum
                      );

    target.append(albumHTML);

  }

}

function init() {
  // console.log("hello world");
  callInfoCds();
}

$(document).ready(init);
