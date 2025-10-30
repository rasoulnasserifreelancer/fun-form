window.addEventListener("load", handleFaceElementBorder);
window.addEventListener("resize", handleFaceElementBorder);
const formElement = document.querySelector("form");
const faceContainer = document.getElementById('face');


document.addEventListener("mouseenter", handleFollowMouse);
document.addEventListener("mouseleave", closeEye)
formElement.addEventListener("mouseenter", handleFormEnter);
formElement.addEventListener("mouseleave", handleFormLeave);

const formWidth = (window.innerWidth * 81) / 100;
const formHeight = (window.innerHeight * 72) / 100;

function handleFollowMouse() {
  openEye()
  const corneas = document.querySelectorAll(".cornea");
  const eye = document.querySelector(".eye");
  corneas.forEach((cornea) => {
    window.addEventListener("mousemove", (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const rec = formElement.getBoundingClientRect();

      if (x  > formWidth + rec.x) {
        cornea.style.left = "65%";
      } else if (x < rec.x) {
        cornea.style.left = -"1%";
      } else {
        cornea.style.left =((x - rec.x) / formWidth) * 100 - 35 + "%";
      }

      if (y > formHeight +  rec.y) {
        cornea.style.bottom = "-25%";
      } else if (y < rec.y) {
        cornea.style.top = -"1%";
      } else {
        cornea.style.top =
          (y - rec.y) / formHeight < 15 / 100
            ? "5%"
            : ((y - rec.y) / formHeight) * 100 - 25 + "%";
      }
    });
  });
}

function handleFormLeave() {
  openEye();
  hideSmile();
}

function handleFormEnter() {
  closeEye();
  showSmile()
}

function closeEye() {
  const eyeSpanElements = document.querySelectorAll(".eyelid");
  eyeSpanElements.forEach((eye) => {
    eye.classList.add("close");
    eye.classList.remove("open");
  });
  const corneas = document.querySelectorAll(".cornea");
  corneas.forEach((cornea) => {
    cornea.style.display = "none";
  });
}

function openEye() {
  const eyeSpanElements = document.querySelectorAll(".eyelid");
  eyeSpanElements.forEach((eye) => {
    eye.classList.add("open");
    eye.classList.remove("close");
  });
    const corneas = document.querySelectorAll(".cornea");
  corneas.forEach((cornea) => {
    cornea.style.display = "inline";
  });
}

function handleFaceElementBorder() {
  const faceElement = document.getElementById("face");
  faceElement.style.width = (window.innerHeight * 3.5) / 10 + "px";
  faceElement.style.height = (window.innerHeight * 3.4) / 10 + "px";
  faceElement.style.borderRadius = (window.innerHeight * 2) / 10 + "px";
}

function showSmile() {
  const spanSmileElement = document.querySelector('.smile');
  spanSmileElement.classList.add('open')
    spanSmileElement.classList.remove('close')

}


function hideSmile() {
  const spanSmileElement = document.querySelector('.smile');
  spanSmileElement.classList.add('close');
    spanSmileElement.classList.remove('open')

}