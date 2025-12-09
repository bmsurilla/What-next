function displayRecommendation(response) {
  let upNext = document.querySelector("#upNext");
  upNext.innerHTML = response.data.answer;
}

function generateRecommendation(event) {
  event.preventDefault();

  let mediaCheckboxes = Array.from(
    form.querySelectorAll("#section-media input[type='checkbox']")
  );
  let selectMedia = mediaCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  if (selectMedia.length === 0) {
    alert("Please select at least one media.");
    return;
  }

  let streamingCheckboxes = Array.from(
    form.querySelectorAll("#section-streaming input[type='checkbox']")
  );
  let selectStream = streamingCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  let lastStoryInput = form.querySelector("#input-last-story");
  let lastStory = lastStoryInput.value.trim();

  let genre = form.querySelector("#genre").value;
  let trope = form.querySelector("#trope").value;

  let mediaString = selectMedia.join(", ");
  let streamString = selectStream.join(", ") || "(none)";

  let usersInput = `the last thing I watched or read was: ${lastStory}. I am looking for something new in this meda: ${mediaString}.`;

  let apiKey = "bab44a6ef3at298bof0b63093865ccef";
  let prompt = `You are an expert on movies, tv-shows and books. you know the most popular but also all hidden gems. Based on the ${usersInput} give a recommendations on what to watch or read next. Consider the options ${genre}, ${trope} and ${streamString} if it is not "none".`;
  let context = `give three recommendations based on the prompt. Make sure to not include R or M rated movies.  When you display your recommendation only add the following: Title, published year, author (if it's a book) or director (if it is a movie)`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecommendation);
}

let form = document.querySelector("#recommendation-form");
form.addEventListener("submit", generateRecommendation);
