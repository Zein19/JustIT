const paragraph = document.getElementById('paragraph');
paragraph.style.color = "blue";

const image = document.querySelector('img');
image.style.borderRadius = "100%"

document.getElementById('hide').addEventListener('click', hideImage)
document.getElementById('show').addEventListener('click', showImage)

function hideImage() {
    image.style.visibility = "hidden"
}

function showImage() {
    image.style.visibility = "visible"
}
const div1 = document.getElementById('div1')
div1.addEventListener('mouseover', stretchDiv)

div1.addEventListener('mouseleave', revertDiv)


function stretchDiv() {
    div1.style.width = "1000px"
}

function revertDiv() {
    div1.style.width = "700px"
}