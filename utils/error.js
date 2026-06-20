const popup = document.querySelector(".error-popup");
const blur = document.querySelector("#blurry-screen");

const closeBtn = document.querySelector("#close-button");
const okBtn = document.querySelector("#ok-button");

function showError() {
    popup.style.display = "flex";
    blur.style.display = "block";
}

function hideError() {
    popup.style.display = "none";
    blur.style.display = "none";
}

closeBtn.addEventListener("click", hideError);
okBtn.addEventListener("click", hideError);

showError();     