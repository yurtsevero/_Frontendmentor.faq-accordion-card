document.addEventListener("click", (e) => {
  let classlist = e.target.classList;
  let answers = Array.from(document.getElementsByClassName("a"));
  
  if (classlist == "q") {
    e.target.firstElementChild.classList.toggle("rotate-img");
    e.target.nextElementSibling.classList.toggle("selected");
  } else if (classlist == "q-img" || classlist == "q-img rotate-img") {
    e.target.parentElement.nextElementSibling.classList.toggle("selected");
    e.target.classList.toggle("rotate-img");
  }
});
