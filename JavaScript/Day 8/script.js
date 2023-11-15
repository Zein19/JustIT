const value = document.getElementById("value")
const key = document.getElementById("key")
const save = document.getElementById("save")
const clear = document.getElementById("clear")

save.addEventListener('click', saveData)

clear.addEventListener('click', clearData)

function saveData(){
    localStorage.setItem(key.value, value.value)

    value.value = ""
    key.value=""
}

function clearData(){
    localStorage.clear

    value.value =""
    clear.value = ""
}