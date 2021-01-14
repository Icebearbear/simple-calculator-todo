window.onload = () => {
    createTODOList()
}


const calculate = function(){
    let n1 = parseInt(document.getElementById('input1').value)
    let n2 = parseInt(document.getElementById('input2').value)
    let operator = document.getElementById('operator').value
 
    let result 

    switch(operator){
        case '+':
            result = n1+n2
            break
        case '-':
            result = n1-n2
            break 
        case '*':
            result = n1*n2
            break
        case '/':
            result = n1/n2
            break
        default:
            result = 123
    }
    document.getElementById('result').innerHTML = result
}

const addTask = function(){
    let task = document.getElementById('input3').value
    if(localStorage.getItem('TODO') === null){ // create empty dictionary
        let todo = {}
        localStorage.setItem('TODO', JSON.stringify(todo))
    }

    let todoStore = JSON.parse(localStorage.getItem('TODO')) // get all data to get the ids
    let todoIDS = Object.keys(todoStore)
    let id
    if(todoIDS.length === 0){ id = 1}
    else { id = parseInt(todoIDS.length)+1} // new data with id after the previous one
    console.log(id.toString())
    todoStore[id.toString()] = task  
    localStorage.setItem('TODO', JSON.stringify(todoStore))  // add the dictionary to storage

    location.reload() //refresh browser
}

const createTODOList = function(){
    let todo = JSON.parse(localStorage.getItem('TODO'))
    let todoList = document.getElementById('tasks')
         
    if(todo){
        for(let item of Object.keys(todo)){
            let task = document.createElement('p') // create new element
            task.innerHTML = `${item} ` + todo[item]  // add data into the DOM
            todoList.appendChild(task)
        }
    }
}

const deleteTask = function(){
    let taskID = document.getElementById('input4').value
    let todo = JSON.parse(localStorage.getItem('TODO'))

    if(todo){
        todo.slice(taskID,1)
        // delete todo[taskID]
        localStorage.setItem('TODO', JSON.stringify(todo))
        }
    location.reload()
    }

const deleteAllTask = function(){
    let todo = JSON.parse(localStorage.getItem('TODO'))
    if(todo){
        localStorage.removeItem('TODO')
    }
    location.reload()
}   