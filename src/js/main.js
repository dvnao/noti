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
    // radiatebackground("alreadySent");
    // disablebutton();
  } else {
    button.classList.remove("btn-primary");
    button.classList.add("btn-success");
    button.textContent = "Success!";
    // radiatebackground("success");
    // disablebutton();
  }

  setTimeout(() => {
    button.disabled = false;
    button.classList.remove("btn-danger", "btn-success");
    button.classList.add("btn-primary");
    button.textContent = "Subscribe";
    //  disablebutton();
  }, 3000);
});

function disablebutton() {
  document.getElementById("load1").disabled = true;
}

// Simulated asynchronous function to check email in the database
function checkEmailInDatabase(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isEmailInDatabase = email === "example@example.com";
      resolve(isEmailInDatabase);
    }, 2000);
  });
}

function radiatebackground(identifier) {
  var colors;

  if (identifier === "subscribe" || identifier === "success") {
    colors = [
      [32, 15, 128],
      [30, 128, 30],
      [128, 15, 49],
      [22, 87, 115],
      [128, 0, 128],
      [128, 64, 0]
    ];
  } else if (identifier === "alreadySent" || identifier === "error") {
    colors = [
      [128, 15, 49],
      [30, 128, 30],
      [32, 15, 128],
      [22, 87, 115],
      [128, 0, 128],
      [128, 64, 0]
    ];
  }

  var step = 0;
  var colorIndices = [0, 1, 2, 3];
  var gradientSpeed = 0.002;

  function updateGradient() {
    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $("#gradient")
      .css({
        background:
          "-webkit-gradient(linear, left top, right top, from(" +
          color1 +
          "), to(" +
          color2 +
          "))",
      })
      .css({
        background:
          "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)",
      });

    step += gradientSpeed;
    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];

      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }
  }

  setInterval(updateGradient, 10);
}