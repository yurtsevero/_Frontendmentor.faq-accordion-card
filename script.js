document.addEventListener("click", (e) => {
  let classlist = e.target.classList;
  if (classlist == "q") {
    e.target.nextElementSibling.classList.add("selected");
  }
});
