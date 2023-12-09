import "../scss/main.scss";
import * as bootstrap from "bootstrap";

document.querySelector("#load1").addEventListener("click", async (e) => {
  const emailInput = document.getElementById("staticEmail");
  const email = emailInput.value;
  const button = e.target;

  button.disabled = true;
  button.innerHTML =
    '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...';

  const isEmailInDatabase = await checkEmailInDatabase(email);

  if (isEmailInDatabase) {
    button.classList.remove("btn-primary");
    button.classList.add("btn-danger");
    button.textContent = "Already Sent";
  } else {
    button.classList.remove("btn-primary");
    button.classList.add("btn-success");
    button.textContent = "Success!";
  }

  setTimeout(() => {
    button.disabled = false;
    button.classList.remove("btn-danger", "btn-success");
    button.classList.add("btn-primary");
    button.textContent = "Subscribe";
  }, 3000);
});

// Simulated asynchronous function to check email in the database
function checkEmailInDatabase(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isEmailInDatabase = email === "example@example.com";
      resolve(isEmailInDatabase);
    }, 2000);
  });
}
