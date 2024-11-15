const addBtn = document.querySelector('#btn'); //return the first elements that match #btn (button "add a task")
const taskCard = document.querySelector(".todoCard"); // get the card it slef (thextarea & delete button)
const count = document.querySelector("#count");
const tasksContainer = document.querySelector("#todoCards"); // get the div that contains the differents cards
addBtn.addEventListener('click', addTask); //call function addTask when clic
const rmBtn = document.querySelector(".delBtn"); //same as addBtn but for delete button (fa-trash)
rmBtn.addEventListener('click', function () { //delete default task on click
    count.innerHTML = counter(tasksContainer);
    deleteTask(taskCard); //target the task
});

// console.log(count.innerHTML);

function addTask () {
    const newTask = taskCard.cloneNode(true); //clone first taskcard to a new variable
    const newDelBtn = newTask.querySelector('.delBtn');
    const NewTextArea = newTask.querySelector('.task'); // get the textarea to add the text on next line
    
    NewTextArea.value = "New Task"; //add text "New Task" to the new task
    tasksContainer.appendChild(newTask); //add the new task into the div (in this case : todoCards)
    newDelBtn.addEventListener('click', function () { // add eventlistener to delete the newTask
        deleteTask(newTask); //target the new task
    });
    count.innerHTML = counter(tasksContainer);
}

function deleteTask(task) {
    task.remove(); //remove the task
    count.innerHTML = counter(tasksContainer);
}

function counter(content) {
    let nb = content.querySelectorAll(".todoCard").length;
    return nb;
}