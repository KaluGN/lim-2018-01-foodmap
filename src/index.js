const splash = document.getElementById("splash");
const header = document.getElementById("header");
const main = document.getElementById("main");
const options = document.getElementById('show-options');
const search = document.getElementById('search');

header.style.visibility = 'hidden';
main.style.visibility = 'hidden';
//Load de 2 segundos
window.onload = () => {
  setTimeout(() => {
    splash.style.visibility = "hidden";
    splash.style.fadeOut = 'slow';
    header.style.visibility = '';
    main.style.visibility = '';
  }, 2000);
}

$('.carousel').carousel({
  interval: 2000
})

// $(document).ready (() => {
//   $("#splash").fadeOut('slow');
// })

const list = "../database/restaurantes.json";
// console.log(list);


/* //Funcion que me perimite hacer la petición de la data que está en mi archivo json
const getPlaces = (url, callback) => {
  console.log(getPlaces);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = callback;
  xhr.onerror = llamadoError;
  xhr.send();
};
const llamadoError = () => {
  console.log('se produjo un error')
} */


//Solicitud síncrona XMLHttpRequest
const getPlaces = (url, callback) => {
const xhr = new XMLHttpRequest();
xhr.open('GET', list, false); 
xhr.send(null);
if(xhr.status == 0)
  dump(xhr.responseText);
console.log(xhr);
};

/* //Solicitud asíncrona XMLHttpRequest
const getPlaces = (url, callback) => {
  console.log(getPlaces);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', list, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
       if(xhr.status == 200)
       var data = JSON.parse(event.target.responseText);
       else
        data("Error loading page\n");
    }
  };
  xhr.send();
} */

const callPlaces = (event) => {
  console.log(event.target.responseText);
  const dataPlaces = JSON.parse(event.target.responseText);
  console.log(dataPlaces);
  let recorrerPlaces = dataPlaces.filter(elementUser => elementUser.role === 'student');
  options.cohortData.users = recorrerUserStats;
};
 getPlaces(list, callPlaces)

//Plantilla parra los restaurantes
const placesNear = (option) => {
  option.forEach(element => {
    options.innerHTML += `
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-6 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]"
                style="height: 225px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16550ebe29f%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16550ebe29f%22%3E%3Crect%20width%3D%22208%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.45%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true">
                <div class="card-body">
                <p class="card-text">Nombre restaurante</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
  });
}

