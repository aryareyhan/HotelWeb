function pageRedirect() {
  // tambahin untuk ke page selanjutnya
  window.location.href = "ConfirmPage.html";
}
function status() {
  var x = document.getElementById("status");
  if (x.innerHTML === "Put your barcode infront of the camera !!") {
    x.innerHTML = "Scan Success!!";
  } else {
    x.innerHTML = "Put your barcode infront of the camera !!";
  }
}
let btn = document.querySelector("#power");
let body = document.querySelector("body");
btn.onclick = function () {
  body.classList.toggle("on");
  status();
  setTimeout("pageRedirect()", 6000);
};

let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  // digital clock
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let am = h >= 12 ? "PM" : "AM";
  //convert 24hr clock to 12hr clock
  if (h > 12) {
    h = h - 12;
  }
  // add zero before single digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
});

const passbtn = document.getElementById("passwordbtn");
const pass = document.getElementById("id_password");
passbtn.onclick = function () {
  if (pass.value.length == 0) alert("Please input password");
  else window.location.href = "#clock";
};
