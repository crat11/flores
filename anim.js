// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Es una voz,", time: 0 },
  { text: "Hay un rayo de luz que entro por mi ventana y me ha devuelto las gans, me quita el dolor,", time: 5 },
  { text: "tu amor es uno de esos que te cambian con un beso y te pone a volar,", time: 12.72 },
  { text: "mi pedazo de sol, la niña de mis ojos tiene una colección de corazones rotos.", time:20.64  },
  { text: "mi pedazo de sol, la niña de mis ojos,", time: 28.56 },
  { text: "la que baila reggaetón, tacones rojos y me pone a volar,", time: 32.32 },
  { text: "la que me hace llorar, la que me hace sufrir, pero no paro de amar,", time: 38 },
  { text: "porque me hizo sentir que gané la lotería,", time: 44 },
  { text: "antes ella no sabía que alguien podía amarme", time: 47.63 },
  { text: "así,", time: 51.72 },
  { text: "Comenzo nuestra historia y te llevé para colombia mi pedazo de sol,", time: 89.10 },
  { text: "la niña de mis ojos tiene una colección de corazones rotos,", time: 92.88 },
  { text: "mis pedazos de sol, la niña de mis ojos,", time: 98.64 },
  { text: "la que baila reggaetón, con tacones rojos y me pone a volar,", time: 102.60 },
  { text: "la que me hace llorar, la que me hace sufrir, pero no paro de amar,", time: 108.20 },
  { text: "porque me hizo sentir que gané la lotería,", time: 114.36 },
  { text: "antes ya no sabía que alguien podría amarme ", time: 118.44 },
  { text: "así,", time: 122.12 },
  { text: "mi pedazo de sol, la niña de mis ojos,", time: 137.72 },
  { text: "tiene una colección de corazones rotos, mi pedazo de sol, la niña de...", time: 141.92 },
  { text: "mis ojos, la que baila reggaetón,", time: 148.44 },
  { text: "Con tacones rojos y me pone a volar, la que me hace llorar,", time: 151.52 },
  { text: "las que me hace sufrir, pero no paro de amar,", time: 157.12 },
  { text: "porque me hizo sentir que gané lotlería antes ella", time: 161.16 },
  { text: "no sabía que alguien podía amarme", time: 166.4 },
  { text: "así", time: 170.4 },
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);