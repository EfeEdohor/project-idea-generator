function displayIdea(response) {
  console.log("creative idea generated");
  new Typewriter("#ideas", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateIdea(event) {
  event.preventDefault();

  let directiveInput = document.querySelector("#user-directive");
  let apiKey = "70e5f18d1793644be2a9c38b65fto4ac";
  let prompt = `Generate a creative project idea about ${directiveInput.value}`;
  let context =
    "You are a creative mind that thinks deeps and understands the future of technology. Your mission is to succinctly generate ideas in five lines for front end developers in simple terms that are impressive to employers and stakeholders in basic HTML. Make sure to use the user directive below. The Idea should not have  a title. After generating the idea, separately sign the idea with 'SheCodes AI- Efe Edohor' in a <strong> and <br/> element on a new line at the end of the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let ideasElement = document.querySelector("#ideas");
  ideasElement.classList.remove("hidden");
  ideasElement.innerHTML = `⌛Generating a project idea about ${directiveInput.value}`;

  axios.get(apiURL).then(displayIdea);
}

let ideaFormElement = document.querySelector("#idea-generator-form");
ideaFormElement.addEventListener("submit", generateIdea);
