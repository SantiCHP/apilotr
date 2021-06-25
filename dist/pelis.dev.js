"use strict";

//API https://the-one-api.dev/documentation
var key = "Bearer j3PaYSwIiawPf4TlU1Eq"; //Character card

var filmSearchResult = [];
cardContainer = document.getElementById('showResult');

makeCharCard = function makeCharCard() {
  filmSearchResult.docs.forEach(function (item, index) {
    item = document.createElement('div');
    item.className = "card border-light mb-3";
    item.innerHTML = "\n      <div class=\"card-header\">".concat(filmSearchResult.docs[index].name, "</div>\n      <div class=\"card-body\">\n      <h4 class=\"card-title\">Detailed information</h4>\n      <span><strong>Birth: </strong> ").concat(filmSearchResult.docs[index].birth, "</span><br>\n      <span><strong>Death: </strong> ").concat(filmSearchResult.docs[index].death, "</span><br>\n      <span><strong>Gender: </strong> ").concat(filmSearchResult.docs[index].gender, "</span><br>\n      <span><strong>Hair: </strong> ").concat(filmSearchResult.docs[index].hair, "</span><br>\n      <span><strong>race: </strong> ").concat(filmSearchResult.docs[index].race, "</span><br>\n      <span><strong>+info: </strong> <a href=\"").concat(filmSearchResult.docs[index].wikiUrl, "\" target=\"_blank\">wiki Fandom LoTR</span>\n      </div>\n    ");
    cardContainer.appendChild(item);
  });
};

document.getElementById('btnSearch').addEventListener('click', function () {
  var searchFilm = document.getElementById('searchFilm').value;
  fetch("https://the-one-api.dev/v2/character?name=".concat(searchFilm), {
    "method": "GET",
    "headers": {
      'Content-type': 'application/json',
      'Authorization': key
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    filmSearchResult = data;
    console.log(filmSearchResult);
    makeCharCard();
  })["catch"](function (err) {
    return console.log('Error', err);
  });
});