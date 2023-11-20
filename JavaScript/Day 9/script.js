const time = document.getElementById('time')
const random = document.getElementById('random')
const btn = document.getElementById('btn')
btn.addEventListener('click', randomNumber)

function randomNumber(){
    random.innerText=Math.round(Math.random()*100)
}

function setTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    time.innerText = clockStr
}

setTime()
setInterval(setTime, 1000)