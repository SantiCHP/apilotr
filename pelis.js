//API https://the-one-api.dev/documentation

let key = "Bearer j3PaYSwIiawPf4TlU1Eq"

//Character card
let filmSearchResult=[];
cardContainer = document.getElementById('showResult');
makeCharCard = function () {
    filmSearchResult.docs.forEach((item, index) => {
        item = document.createElement('div');
        item.className = "card border-light mb-3";
        item.innerHTML = `
      <div class="card-header">${filmSearchResult.docs[index].name}</div>
      <div class="card-body">
      <h4 class="card-title">Detailed information</h4>
      <span><strong>Birth: </strong> ${filmSearchResult.docs[index].birth}</span><br>
      <span><strong>Death: </strong> ${filmSearchResult.docs[index].death}</span><br>
      <span><strong>Gender: </strong> ${filmSearchResult.docs[index].gender}</span><br>
      <span><strong>Hair: </strong> ${filmSearchResult.docs[index].hair}</span><br>
      <span><strong>race: </strong> ${filmSearchResult.docs[index].race}</span><br>
      <span><strong>+info: </strong> <a href="${filmSearchResult.docs[index].wikiUrl}" target="_blank">wiki Fandom LoTR</span>
      </div>
    `;
        cardContainer.appendChild(item);
    })
}


document.getElementById('btnSearch').addEventListener('click', () => {
    let searchFilm = document.getElementById('searchFilm').value;

    fetch(`https://the-one-api.dev/v2/character?name=${searchFilm}`, {
            "method": "GET",
            "headers": {
                'Content-type': 'application/json',
                'Authorization': key
            }
        })
        .then((res) => res.json())
        .then((data) => {
            filmSearchResult = data;
            console.log(filmSearchResult);
            makeCharCard();
        })
        .catch((err) => console.log('Error', err))
});