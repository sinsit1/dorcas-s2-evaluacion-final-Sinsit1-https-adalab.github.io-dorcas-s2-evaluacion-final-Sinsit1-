'use strict';

var buttonSearch = document.querySelector('.buttonSearch');
var searchHolder = document.getElementById('buscador');
var results = document.querySelector('.grid-container-results');

function searchShow() {
  results.innerHTML= ''; // reseteo la busqueda
  var search = searchHolder.value;
  var list = document.createElement('ul');

  results.appendChild(list);

  fetch('http://api.tvmaze.com/search/shows?q=' + search)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      var result = json;

      for (var i = 0; i < result.length; i++) {
        var element = document.createElement('li');
        var img = document.createElement('img');
        var h2 = document.createElement('h2');

        h2.innerHTML = 'Name: ' + result[i].show.name;



        if (result[i].show.image.medium===true){
          console.log ('tomaya');
        } else {
          console.log('ni de coña');
        }

        // img.setAttribute('src', result[i].show.image.medium);

        list.appendChild(element);
        element.appendChild(h2);
        element.appendChild(img);
      }
    });
}

buttonSearch.addEventListener('click', searchShow);
