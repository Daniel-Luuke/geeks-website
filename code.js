const header = document.querySelector("header");
header.style.backgroundColor = "blue";

const h1 = document.querySelector("h1");
const headerParagraph = document.querySelector("#header-p");
const button = document.querySelector("#submit-button");
let fullName;
let email;
let message;

button.addEventListener("click", (event) => {
  // prevent form from refreshing page
  event.preventDefault();

  // retreive values from the form
  const fullName = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  h1.textContent = fullName;
  headerParagraph.textContent = message;
 });



