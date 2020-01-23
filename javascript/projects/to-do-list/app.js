let addTask = document.getElementById('add-task');
let inputValue;
let output = document.getElementById('my-output');
let itemCount = 1
let item = document.getElementById('to-do-item');


addTask.addEventListener('click', addTaskToList);


function addTaskToList() {
    setValue();
    console.log(inputValue);
    
    output.innerHTML += `<li class="to-do-item item${itemCount}">${inputValue} <button class="delete-me">Delete</button></li>`
    let deleteButton = document.querySelectorAll('.delete-me')
    deleteButton.forEach(button => button.addEventListener('click', deleteItem));
    itemCount++;

}

function setValue() {
    inputValue = document.getElementById('my-input').value;
}

function deleteItem() {
    let li = this.parentNode;
    li.remove();
    console.log('deleted');
    
}


