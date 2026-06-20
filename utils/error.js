const popup = document.querySelector(".error-popup");
const blur = document.querySelector("blurry-screen");

const closeBtn = document.querySelector("close-button")
const okBtn = document.querySelector("ok-button")

function showError(){
    popup.style.dispaly = "flex";
    blur.style.dispaly = "block";
}

function hideError(){
    popup.style.display = "none";
    blur.style.display = "none";
}

closeBtn(addEventListener("click"), function(){
    hideError()
});

okBtn(addEventListener("click"), function(){
    hideError()
});



