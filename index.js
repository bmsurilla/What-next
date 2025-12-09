function generateRecommendation(event) {
  event.preventDefault();
  // let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  // let isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
  // if (!isChecked) {
  //   event.preventDefault();
  //   alert("please select at least one media.");
  // }
  // let media = isChecked;
  // let lastStory = document.querySelector("#section-last-story").value;
  // let genre = document.querySelector("#section-genre").value;
  // let trope = document.querySelector("#section-trope").value;
  // let streaming = document.querySelector("#section-streaming");
  // let usersInput = `${media}, ${lastStory}, ${genre}, ${trope}, ${streaming}`;
  // // alert(`just to be sure. this is what you are looking for: ${usersInput}`);

  //   let apiKey = "bab44a6ef3at298bof0b63093865ccef";
  //   let prompt = `You are an expert on movies, tv-shows and books. you know the most popular but also all hidden gems. Based on the ${usersInput} give a recommendations on what to watch or read next. When you display your recommendation only add the following: Title, published year, author (if it's a book) or director (if it is a movie)`;
  //   let context = `give three recommendations based on the prompt. Make sure to not include R or M rated movies.`;
  //   let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // //   axios.get(apiUrl).then(generateRecommendation);
}

let recommendation = document.querySelector("#recommendation-form");
recommendation.addEventListener("submit", generateRecommendation);
