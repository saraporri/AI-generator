function generateLyrics(event) {
  event.preventDefault();

  new Typewriter("#lyrics", {
    strings: "Ho sceso dandoti il braccio almeno un milione di scale",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let lyricsFormElement = document.querySelector("#lyrics-generator-form");
lyricsFormElement.addEventListener("submit", generateLyrics);
