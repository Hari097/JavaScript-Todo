let todoItemsContainer = document.getElementById("todoItemsContainer")
let addTodoButton = document.getElementById("addTodoButton")
let saveTodoButton = document.getElementById("saveTodoButton")




let todoList = getTodoListFromLocalStorage()
let countodo = todoList.length


saveTodoButton.onclick = function(){
    
    localStorage.setItem("todolist",JSON.stringify(todoList))
}

function getTodoListFromLocalStorage(){
    let stringifyTodoList = localStorage.getItem("todolist")
    let parseTodoList = JSON.parse(stringifyTodoList)
    if(parseTodoList === null){
    return []
    } else{
        return parseTodoList
    }
    }

function onTodoStatusChange(checkboxid,labelid,todoid){
        let checkboxElement = document.getElementById(checkboxid)
        let labelElement = document.getElementById(labelid)
    
        labelElement.classList.toggle("checked")
    
        let findtodoidIndex = todoList.findIndex(function(eachtodo){ 
            let eachtodoId = "todo"+eachtodo.uniqueNo 
            if (eachtodoId === todoid){
                return true
            } else{
                return false
            }
    
            
    
        })
    
        let todoObject = todoList[findtodoidIndex]
    
        if (todoObject.isChecked === true){
    todoObject.isChecked = false
        } else{
            todoObject.isChecked = true
        }
    }

function createAppendTodo(todo){ 

    let todoid = "todo" + todo.uniqueNo

    let checkboxid = "todo" + todo.uniqueNo 

    let labelid  = "todo" + todo.uniqueNo

    let todoElement  = document.createElement("l")
    todoElement.classList.add("todo-item-container","d-flex","flex-row")
    todoElement.id = todoid
    todoItemsContainer.appendChild(todoElement)

    let inputElement = document.createElement("input")
    inputElement.type = "checkbox"
    inputElement.id = checkboxid 
    inputElement.checked = todo.isChecked
    inputElement.classList.add("checkbox-input") 
    todoElement.appendChild(inputElement) 
    inputElement.onclick = function(){
        onTodoStatusChange(checkboxid,labelid,todoid)
    }

    let labelcontainer = document.createElement("div") 
    labelcontainer.classList.add("label-container", "d-flex","flex-row")
    todoElement.appendChild(labelcontainer) 

    let labelElement = document.createElement("label")
    labelElement.id = labelid
    labelElement.setAttribute("for","checkboxInput")
    labelElement.classList.add("checkbox-label") 
    labelElement.textContent = todo.text 
    labelcontainer.appendChild(labelElement) 

    if(todo.isChecked === true){
           labelElement.classList.add("checked")
    }

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
    uniqueNo:countodo,
    isChecked:false
}
todoList.push(newtodo)
createAppendTodo(newtodo)
userInputElement.value = ""
}

addTodoButton.onclick = function(){
    onAddTodo()
} 


function onDeletetodo(todo){
let todoelement = document.getElementById(todo)

todoItemsContainer.removeChild(todoelement)  

let deleteElementIndex = todoList.findIndex(function(element){
let eachtodoId = "todo" + element.uniqueNo 
if(eachtodoId === todo.uniqueNo){
return true
}else{
    return false
}
})
todoList.splice(deleteElementIndex,1)
}



