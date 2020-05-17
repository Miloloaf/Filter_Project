// const aboutUsImg = document.getElementById("aboutUsImage");

function moveBorder() {
    document.getElementById("aboutUsImageBorder").classList.add("static")
}

function removeBorder() {
    document.getElementById("aboutUsImageBorder").classList.remove("static");
}

document.getElementById("aboutUsImage").addEventListener("mouseenter", moveBorder);
document.getElementById("aboutUsImage").addEventListener("mouseleave", removeBorder);