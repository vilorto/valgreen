let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Crear nuevo elemento de audio
let curr_track = document.createElement('audio');

// Define las pistas que se deben reproducir
let track_list = [
/*	{
		name: "El viaje definitivo",
		artist: "Julio 2027 (a)",
		image: "img/el-viaje-definitivo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/El viaje definitivo.mp3"
	},
	{
		name: "La partida",
		artist: "Julio 2027 (b)",
		image: "img/la-partida.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/La partida.mp3"
	},
	{
		name: "No te rindas",
		artist: "Junio 2027 (a)",
		image: "img/no-te-rindas.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/No te rindas.mp3"
	},
	{
		name: "Mi dulce niña",
		artist: "Junio 2027 (b)",
		image: "img/mi-dulce-niña.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Mi dulce niña.mp3"
	},
	{
		name: "La fuga infinita",
		artist: "Mayo 2027 (a)",
		image: "img/la-fuga-infinita.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/La fuga infinita.mp3"
	},
	{
		name: "Me duele el alma",
		artist: "Mayo 2027 (b)",
		image: "img/me-duele-el-alma.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Me duele el alma.mp3"
	},
	{
		name: "Elijo alejarme",
		artist: "Abril 2027 (a)",
		image: "img/elijo-alejarme.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Elijo alejarme.mp3"
	},
	{
		name: "Mírame",
		artist: "Abril 2027 (b)",
		image: "img/mirame.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Mírame.mp3"
	},
	{
		name: "Por algo pasan las cosas",
		artist: "Marzo 2027 (a)",
		image: "img/por-algo-pasan-las-cosas.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Por algo pasan las cosas.mp3"
	},
  {
    name: "Carta de amor",
    artist: "Marzo 2027 (b)",
    image: "img/carta-de-amor.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
    path: "music/Carta de amor.mp3"
  },
	{
		name: "Amor imposible",
		artist: "Febrero 2027 (a)",
		image: "img/amor-imposible.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Amor imposible.mp3"
	},
	{
		name: "Contradicciones",
		artist: "Febrero 2027 (b)",
		image: "img/contradicciones.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Contradicciones.mp3"
	},
	{
		name: "El andén",
		artist: "Enero 2027 (a)",
		image: "img/el-andén.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/El andén.mp3"
	},
	{
		name: "Lamentación de otoño",
		artist: "Enero 2027 (b)",
		image: "img/lamentacion-de-otoño.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Lamentación de otoño.mp3"
	},
	{
		name: "Ella es",
		artist: "Diciembre 2026 (a)",
		image: "img/ella-es.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Ella es.mp3"
	},
	{
		name: "En paz",
		artist: "Diciembre 2026 (b)",
		image: "img/en-paz.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/En paz.mp3"
	},
	{
		name: "El crepúsculo",
		artist: "Noviembre 2026 (a)",
		image: "img/el-crepusculo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/El crepúsculo.mp3"
	},
	{
		name: "De quién es el amor",
		artist: "Noviembre 2026 (b)",
		image: "img/de-quien-es-el-amor.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/De quién es el amor.mp3"
	},
	{
		name: "Oasis",
		artist: "Octubre 2026 (a)",
		image: "img/oasis.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Oasis.mp3"
	},
	{
		name: "Nuestro hilo rojo",
		artist: "Octubre 2026 (b)",
		image: "img/nuestro-hilo-rojo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Nuestro hilo rojo.mp3"
	},
  {
    name: "Se fue",
    artist: "Septiembre 2026 (a)",
    image: "img/se-fue.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
    path: "music/Se fue.mp3"
  },
	{
		name: "Rosa del otoño",
		artist: "Septiembre 2026 (b)",
		image: "img/rosa-del-otoño.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Rosa del otoño.mp3"
	},
	{
		name: "Tu nombre",
		artist: "Agosto 2026 (a)",
		image: "img/tu-nombre.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Tu nombre.mp3"
	},
	{
		name: "Triste es saber",
		artist: "Agosto 2026 (b)",
		image: "img/triste-es-saber.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Triste es saber.mp3"
	},
	{
		name: "Te acordarás un día",
		artist: "Julio 2026 (a)",
		image: "img/te-acordarás-un-día.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Te acordarás un día.mp3"
	},
	{
		name: "Verte de lejos",
		artist: "Julio 2026 (b)",
		image: "img/verte-de-lejos.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Verte de lejos.mp3"
	},
	{
		name: "Acuerdate de mi",
		artist: "Junio 2026 (a)",
		image: "img/acuerdate-de-mi.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Acuerdate de mi.mp3"
	},
	{
		name: "Dos extraños",
		artist: "Junio 2026 (b)",
		image: "img/dos-extraños.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Dos extraños.mp3"
	},
	{
		name: "Carta sin fecha",
		artist: "Mayo 2026 (a)",
		image: "img/carta-sin-fecha.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Carta sin fecha.mp3"
	},
	{
		name: "Aunque me lo pidas",
		artist: "Mayo 2026 (b)",
		image: "img/aunque-me-lo-pidas.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Aunque me lo pidas.mp3"
	},
	{
		name: "El destino lo sabe",
		artist: "Abril 2026 (a)",
		image: "img/el-destino-lo-sabe.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/El destino lo sabe.mp3"
	},
	{
		name: "Querido pasado",
		artist: "Abril 2026 (b)",
		image: "img/querido-pasado.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Querido pasado.mp3"
	},
	{
		name: "Solo contigo",
		artist: "Marzo 2026 (a)",
		image: "img/solo-contigo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Solo contigo.mp3"
	},
	{
		name: "Vivir es desatinar",
		artist: "Marzo 2026 (b)",
		image: "img/vivir-es-desatinar.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Vivir es desatinar.mp3"
	},
	{
		name: "Te amo",
		artist: "Febrero 2026 (a)",
		image: "img/te-amo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Te amo.mp3"
	},
	{
		name: "Si yo fuera",
		artist: "Febrero 2026 (b)",
		image: "img/si-yo-fuera.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Si yo fuera.mp3"
	},
	{
		name: "Confundido",
		artist: "Enero 2026 (a)",
		image: "img/confundido.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Confundido.mp3"
	},
	{
		name: "Un nuevo comienzo",
		artist: "Enero 2026 (b)",
		image: "img/un-nuevo-comienzo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Un nuevo comienzo.mp3"
	},
	{
		name: "Feliz Navidad",
		artist: "Diciembre 2025 (a)",
		image: "img/feliz-navidad.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Feliz Navidad.mp3"
	},
	{
		name: "Ser feliz",
		artist: "Diciembre 2025 (b)",
		image: "img/ser-feliz.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Ser feliz.mp3"
	},
	{
		name: "Cerrando el tiempo",
		artist: "Noviembre 2025 (a)",
		image: "img/cerrando-el-tiempo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Cerrando el tiempo.mp3"
	},
	{
		name: "Yo te quería a ti",
		artist: "Noviembre 2025 (b)",
		image: "img/yo-te-queria-a-ti.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Yo te queria a ti.mp3"
	},
	{
		name: "Niña de mis besos",
		artist: "Octubre 2025 (a)",
		image: "img/niña-de-mis-besos.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Niña de mis besos.mp3"
	},
	{
		name: "El destino",
		artist: "Octubre 2025 (b)",
		image: "img/el-destino.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/El destino.mp3"
	},
  {
    name: "Amor inolvidable",
    artist: "Septiembre 2025 (a)",
    image: "img/amor-inolvidable.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
    path: "music/Amor inolvidable.mp3"
  },
	{
		name: "Llegando a la meta",
		artist: "Septiembre 2025 (b)",
		image: "img/llegando-a-la-meta.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Llegando a la meta.mp3"
	},
  {
    name: "Como poder olvidarte",
    artist: "Agosto 2025 (a)",
    image: "img/como-poder-olvidarte.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
    path: "music/Como poder olvidarte.mp3"
  },
  {
    name: "Volvimos a encontrarnos",
    artist: "Agosto 2025 (b)",
    image: "img/volvimos-a-encontrarnos.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
    path: "music/Volvimos a encontrarnos.mp3"
  },*/
	{
		name: "Manifiesto",
		artist: "Julio 2025 (a)",
		image: "img/manifiesto.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Manifiesto.mp3"
	},
	{
		name: "Destinados a no ser",
		artist: "Julio 2025 (b)",
		image: "img/destinados-a-no-ser.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
		path: "music/Destinados a no ser.mp3"
	},
  {
    name: "Solo a ti",
    artist: "Junio 2025",
    image: "img/solo-a-ti.jpg?auto=compress&cs=tinysrgb&dpr=3&h=256&w=256",
    path: "music/Solo a ti.mp3"
  },
];

function random_bg_color() {

  // Obtenga un número entre 124 y 224 (para obtener colores más claros)
  let red = Math.floor(Math.random() * 224) + 124;
  let green = Math.floor(Math.random() * 224) + 124;
  let blue = Math.floor(Math.random() * 224) + 124;

  // Construye un color con los valores dados
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Establezca el fondo en ese color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = (track_index + 1) + " / " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);    
	curr_track.addEventListener("ended", playTrack);
	random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Cargar la primera pista en la lista de pistas
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) {
		playTrack();
  } else {
		pauseTrack();
	}
}

const reproducir = "svg/play.svg";
const pausar = "svg/pause.svg";

function playTrack() {
  curr_track.play();
  isPlaying = true;
	document.getElementById('iconoControl').src = pausar;
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
	document.getElementById('iconoControl').src = reproducir;
}

function nextTrack() {
  if (track_index < track_list.length - 1) {
		track_index += 1;
  } else { 
		track_index = 0;
	}
	loadTrack(track_index);
	document.getElementById('iconoControl').src = reproducir;
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
		track_index = track_list.length;
	}
	loadTrack(track_index);
	document.getElementById('iconoControl').src = reproducir;
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


