//Array con el listado de canciones a mostrar en el reprodutor
const canciones = [
	"Solo A Ti",
	"Cerrando El Tiempo",
	"Manifiesto",
	"Caminos Separados",
	"Volvimos A Encontrarnos",
	"Destinados A No Ser",
	"Niña De Mis Besos",
	"Amor Inolvidable",
	"No Sé",
	"Maravillosa Y Lejana",
	"Desde Dentro",
	"Nunca He Tenido",
	"Como Poder Olvidarte",
	"Paz Al Partir",
	"Tú Brillas Yo No",
	"Te Echo De Menos",
	"Nostalgia",
	"Te Recuerdo Con Amor",
	"Perdóname Cariño",
	"Que Valga La Pena",
]

  var indiceActual = new Array(1);
  //Funcion para crear mediante javascript el listado de canciones
  function crearPlayList(){
    const listado = document.createElement('ol');
    listado.setAttribute("id", 'listadoMusica');
    for (var i = 0; i < canciones.length; i++){
      const item = document.createElement('li');
      item.appendChild(document.createTextNode(canciones[i])); 
      item.setAttribute("id", canciones.indexOf(canciones[i]));
      listado.appendChild(item);
    }
    return listado;
  }
  document.getElementById('playList').appendChild(crearPlayList());
   
  var listadoMusica= document.getElementById('listadoMusica');
  listadoMusica.onclick = (e) =>{
    const itemClick = e.target;
    removeActive();
    itemClick.classList.add("active");
    reproduccionActual(itemClick.innerText);
    loadMusic(itemClick.innerText);
    player.play();
    indiceActual[0] = e.target.id;
		document.getElementById('iconPlay').src = "svg/pause.svg";
  }

  //Funcion para control del volumen
  const volumen = document.getElementById("volumen");
  volumen.oninput = (e) =>{
    const vol = e.target.value;
    player.volume = vol;
  }
  
  //Funcion para actualizar la barra de progreso del reprodutor
  const updateProgress = () =>{
    if (player.currentTime >0){
      const barra = document.getElementById('progress');
      barra.value = (player.currentTime / player.duration) * 100;
      
      var duracionSegundos = player.duration.toFixed(0);
      dura = secondsToString(duracionSegundos);
      var actualSegundos = player.currentTime.toFixed(0);
      actual = secondsToString(actualSegundos);
      
      document.getElementById('current-time').innerText = actual; 
      document.getElementById('total-duration').innerText = dura; 
    }
    if (player.ended){
      nextMusic();//Reproducir la siguiente pista
    } 
  }

  //Funcion para reproducir la proxima cancion
  function nextMusic(){  
    const source = document.getElementById('source');
    var musicaActual = Number(indiceActual[0]);
    if (canciones.length == (musicaActual +1 )){
      var siguiente = 0;
    } else {
      var siguiente = musicaActual + 1;
    }
    removeActive();
    var item=document.getElementById(siguiente);
    item.classList.add("active");
    loadMusic(canciones[siguiente]);
    player.play();
    indiceActual[0] = siguiente;
    reproduccionActual(canciones[siguiente]);
		document.getElementById('iconPlay').src = "svg/pause.svg";
  }

  //Funcion para reproducir la cancion anterior
  function prevMusic(){  
    const source = document.getElementById('source');
    var musicaActual = Number(indiceActual[0]);
    if (musicaActual == 0){
      var anterior = canciones.length - 1;
    } else {
      var anterior = musicaActual - 1;
    }
    removeActive()
    var item=document.getElementById(anterior);
    item.classList.add("active");
    loadMusic(canciones[anterior]);
    player.play();
    indiceActual[0] = anterior;
    reproduccionActual(canciones[anterior]);
		document.getElementById('iconPlay').src = "svg/pause.svg";
  }

  //Funcion para remover todas las clases css activas
  function removeActive(){
    var elems = document.querySelectorAll(".active");
      [].forEach.call(elems, function(el){
        el.classList.remove("active");
      });
      return elems;
  }
	
  //Funcion para mostrar el nombre del arhivo actual en reproduccion
  function reproduccionActual(texto){
    document.getElementById('currentPlay').innerText = texto;
  }
	
  //Funcion para cargar las canciones en el reproductor
  function loadMusic(ruta) {
    var source = document.getElementById('source');
    var folder = "audio";//Carpeta donde tenemos almancenada la musica
    source.src = folder + "/" + ruta + ".mp3";
    var index= indiceActual[0] = canciones.indexOf(ruta);
    removeActive();
    var item=document.getElementById(index);
    item.classList.add("active");
    reproduccionActual(ruta);
    player.load();
  }
	
  //Funcion para pausar o darle play 
  function togglePlay(){
    if (player.paused){
			document.getElementById('iconPlay').src = "svg/pause.svg";
      return player.play();
    } else {
			document.getElementById('iconPlay').src = "svg/play.svg";
      return player.pause();
    }
  }
	
  //Funcion para que al dar click sobre la barra de progreso se permita adelantar
  progress.addEventListener('click', adelantar);
  function adelantar(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = scrubTime;
    console.log(e);
  }

  //Funcion para convertir segundos a minutos y horas
  function secondsToString(seconds){
    var hour="";
    if (seconds>3600){
      hour = Math.floor(seconds / 3600);
      hour = (hour < 10)? '0' + hour : hour;
    }
		var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return hour + minute + ':' + second;
  }
  loadMusic(canciones[0]);
