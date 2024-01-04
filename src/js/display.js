import { setForm } from "./form.js";
import { setAddFormListeners ,setAddTask } from "./add.js";

function displayAddTaskForm() {
    const addNewTaskBtn = document.querySelector(".project-addTask");
    /* MAKING THE ADD TASK DIV INTO FORM CONTAINER */
    addNewTaskBtn.classList.remove("project-addTask");
    addNewTaskBtn.classList.add("add-form");
    setForm(addNewTaskBtn);
    setAddFormListeners();
}

function displayAddTask(element) {
    element.innerHTML = `<img src="./img/add-normal.svg" alt="" width="30" height="30" />
    <p>Add Task</p>`;
};

function cancelTaskForm(e) {
    e.stopPropagation();
    const formCtn = document.querySelector(".add-form");
    /* REVERSING THE FORM BACK TO ADDD TASK DIV */
    formCtn.classList.remove("add-form");
    formCtn.classList.add("project-addTask");
    displayAddTask(formCtn);
    setAddTask();
}

export { displayAddTaskForm ,cancelTaskForm};