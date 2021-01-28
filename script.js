document.addEventListener("click", (e) => {
  let classlist = e.target.classList;
  let answers = Array.from(document.getElementsByClassName("a"));

  console.log(answers);
  if (classlist == "q") {
    answers.forEach((answer) => {
      console.log(answer);
      answer.classList.remove("selected");
    });
    e.target.nextElementSibling.classList.add("selected");
  }
});
