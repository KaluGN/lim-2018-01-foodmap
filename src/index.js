const splash = document.getElementById("splash");
const header = document.getElementById("header");
const main = document.getElementById("main");

//Load de 2 segundos
window.onload = () => {
  setTimeout(() => {
    splash.style.visibility = "hidden";
    splash.style.fadeOut = 'slow';
    // header.style.visibility = '';
    // main.style.visibility = '';
  }, 2000);
}

// $(document).ready (() => {
//   $("#splash").fadeOut('slow');
// })



// //Funcion que me perimite hacer la petición de la data que está en mi archivo json
// const getData = (url, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.onload = callback;
//   xhr.onerror = llamadoError;
//   xhr.send();
// };

// const llamadoError = () => {
//   console.log('se produjo un error')
// }

// //ARGUMENTOS OBJETO GLOBAL
// let options = {
//   cohort: [],
//   cohortData: {
//     users: null,
//     progress: null,
//   },
//   orderBy: 'name', 
//   orderDirection: 'asc',
//   search: '',
// }

