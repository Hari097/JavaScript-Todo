let todoItemsContainer = document.getElementById("todoItemsContainer")
let addTodoButton = document.getElementById("addTodoButton")
let todoList = [
    {text:"Learn HTML",uniqueNo:1},
    {text:"Learn CSS",uniqueNo:2},
    {text:"Learn Bootstrap",uniqueNo:3},
    {text:"Learn JavaScript",uniqueNo:4}
] 
let countodo = todoList.length

function createAppendTodo(todo){ 

    let todoid = "todo" + todo.uniqueNo

    let todoElement  = document.createElement("l")
    todoElement.classList.add("todo-item-container","d-flex","flex-row")
    todoElement.id = todoid
    todoItemsContainer.appendChild(todoElement)

    let inputElement = document.createElement("input")
    inputElement.type = "checkbox"
    inputElement.id = "checkboxInput"
    inputElement.classList.add("checkbox-input") 
    todoElement.appendChild(inputElement) 

    let labelcontainer = document.createElement("div") 
    labelcontainer.classList.add("label-container", "d-flex","flex-row")
    todoElement.appendChild(labelcontainer) 

    let labelElement = document.createElement("label")
    labelElement.setAttribute("for","checkboxInput")
    labelElement.classList.add("checkbox-label") 
    labelElement.textContent = todo.text 
    labelcontainer.appendChild(labelElement)

    let deleteIconContainer = document.createElement("div")
    deleteIconContainer.classList.add("delete-icon-container");
    labelcontainer.appendChild(deleteIconContainer)
 

    let deleteIcon = document.createElement("i")
    deleteIcon.classList.add("far","fa-trash-alt","delete-icon")
    deleteIcon.onclick = function(){
        onDeletetodo(todoid)
    }
    deleteIconContainer.appendChild(deleteIcon)

}

for (let todoeach of todoList){
    createAppendTodo(todoeach)
}

function onAddTodo(){
let userInputElement = document.getElementById("todoUserInput")
let userInputValue = userInputElement.value


if(userInputValue === ""){
alert("Enter Vaild text")
return
} 

countodo = countodo + 1 

let newtodo = {
    text:userInputValue,
    uniqueNo:countodo
}
createAppendTodo(newtodo)
userInputElement.value = ""
}

addTodoButton.onclick = function(){
    onAddTodo()
} 


function onDeletetodo(todo){
let todoelement = document.getElementById(todo)

todoItemsContainer.removeChild(todoelement)
}