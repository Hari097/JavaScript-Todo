let todoItemsContainer = document.getElementById("todoItemsContainer")

let todoList = [
    {text:"Learn HTML"},
    {text:"Learn CSS"},
    {text:"Learn JavaScript"},
    {text:"Learn React.js"}
]

function createAppendTodo(todo){
    let todoElement  = document.createElement("li")
    todoElement.classList.add("todo-item-container","d-flex","flex-row")
    todoItemsContainer.appendChild(todoElement) 
    todoElement.id = todoList.text

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
    deleteIconContainer.appendChild(deleteIcon)

}

for (let todoeach of todoList){
    createAppendTodo(todoeach)
}
