//https://www.shecodes.io/learn/apis/ai

function displayLyrics(response) {
  new Typewriter("#lyrics", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateLyrics(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "8b07dt8e17fee9f438eo54a03e745179";
  let prompt = `User instructions: Generate song lyrics about ${instructionsInput.value}`;
  let context =
    "Please it should be just a verse, everything in basic HTML and separate each line with a <br/>. Include song title and artist inside a <strong> element. Make sure to follow the user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayLyrics);
}

let lyricsFormElement = document.querySelector("#lyrics-generator-form");
lyricsFormElement.addEventListener("submit", generateLyrics);
