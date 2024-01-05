import { setForm } from "./form.js";
import { setAddFormListeners, setAddTask ,setDeleteBtns} from "./add.js";
import { createTask , displayTaskCard } from "./tasks.js";

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

function addTaskFormBtn(e) {
    e.stopPropagation();
    const formCtn = document.querySelector(".add-form");
    /* CONVERTING FORM CTN INTO TASK CARD */
    formCtn.classList.remove("add-form");
    formCtn.classList.add("task-card")
    const name = document.querySelector(".newTaskName");
    const description = document.querySelector(".newTaskDesc");
    const dueDate = document.querySelector(".newDueDate");
    const priority = document.querySelector(".form-setPriority");
    const newTask = createTask(name.value, description.value, dueDate.value, priority.value);
    displayTaskCard(newTask, formCtn);
    setAddTask();
    setDeleteBtns();
}

function taskDeleteBtn(e) {
    const displayCtn = document.querySelector(".display-ctn");
    const cardToDel = e.target.parentNode.parentNode.parentNode;
    displayCtn.removeChild(cardToDel);
}

export { displayAddTaskForm ,cancelTaskForm ,addTaskFormBtn ,displayAddTask,taskDeleteBtn};