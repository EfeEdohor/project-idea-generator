function generateIdea(event) {
  event.preventDefault();

  new Typewriter("#ideas", {
    strings: "Project Ideas",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let ideaFormElement = document.querySelector("#idea-generator-form");
ideaFormElement.addEventListener("submit", generateIdea);
