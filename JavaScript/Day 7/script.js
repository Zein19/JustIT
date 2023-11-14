const list = document.getElementById("list")

const list1 = document.createElement("li")
const list2 = document.createElement("li")
const list3 = document.createElement("li")
const list4 = document.createElement("li")
const list5 = document.createElement("li")

list.append(list1)
list.append(list2)
list.append(list3)
list.append(list4)
list.append(list5)

list1.innerHTML="Second Item through JavaScript"
list2.innerHTML="Third Item through JavaScript"
list3.innerHTML="Fourth Item through JavaScript"
list4.innerHTML="Fifth Item through JavaScript"
list5.innerHTML="Sixth Item through JavaScript"

const btn = document.getElementById("save")
btn.addEventListener('click', save)

function save(){
    const textbox = document.getElementById("textbox")
    console.log(textbox.value)
}

const input = document.querySelector("#text")
const toDoList = document.querySelector("#myList")
const addBtn = document.querySelector("#add")
const removeBtn = document.querySelector("#remove")

addBtn.addEventListener('click', add)
removeBtn.addEventListener('click', remove)

function add(){
    const item = document.createElement("li")
    item.innerHTML=input.value
    toDoList.appendChild(item)
    input.value=""
}

function remove(){
    toDoList.removeChild(toDoList.lastElementChild)
    input.value=""
}