const email = document.getElementById("sign-email");
const pass = document.getElementById("sign-pass");
const btn = document.querySelector(".sign-button");

btn.onclick = function () {
  if (email.value.length == 0 && pass.value.length == 0)
    alert("Please input email and password");
  else if (email.value.length == 0) alert("Please input email");
  else if (pass.value.length == 0) alert("Please input password");
  else window.location.href = "./scan_barcode.html";
};
