
function addToTodoList() {
    //get the text in the input box
    let todoItem = document.getElementById("text").value;

    let listElement = createLiElement(todoItem);
    let span = addButtons();
    listElement.appendChild(span);

    //place the new list element in the list
    let todoList =  document.getElementById("todoList");
    todoList.appendChild(listElement);
}


function createLiElement(text) {
    //create a new <li> element and place text inside
    let listElement = document.createElement("li");
    let itemText = document.createTextNode(text);
    listElement.appendChild(itemText);
    return listElement;
}


function addButtons() {
    //create span and buttons
    let span = document.createElement("span");
    let done = document.createElement("button");
    let clear = document.createElement("button");

    done.innerHTML = "Done";
    clear.innerHTML = "X";

    //create button functionality
    done.onclick = function () {
        this.style.display = 'none';
        this.parentElement.parentElement.style.color = 'green';
    }
    clear.onclick = function () {
        this.parentElement.parentElement.style.display = 'none';
    }

    span.appendChild(done);
    span.appendChild(clear);
    return span;
}


function clearTodoList() {
    //confirm if they want to delete
    if(confirm('Are you sure you want to delete all items?')){

        let todoList = document.getElementById("todoList");

        //delete the first child in the list, then get the list again
        while(todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }
    }
    return;


}
