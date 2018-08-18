let splash = document.getElementById("splash");

function hideMain() {
  splash.style.visibility = "hidden"; 
}

//Funcion que me perimite hacer la petición de la data que está en mi archivo json
const getData = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = callback;
  xhr.onerror = llamadoError;
  xhr.send();
};

const llamadoError = () => {
  console.log('se produjo un error')
}

//ARGUMENTOS OBJETO GLOBAL
let options = {
  cohort: [],
  cohortData: {
    users: null,
    progress: null,
  },
  orderBy: 'name', 
  orderDirection: 'asc',
  search: '',
}

