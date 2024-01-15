import { setForm } from "./form.js";
import { setAddFormListeners } from "./listeners.js";
import { displayTaskCard } from "./taskCard.js";

function displayAddTaskForm(e) {
    const addNewTaskBtn = document.querySelector(".project-addTask");
    /* MAKING THE ADD TASK DIV INTO FORM CONTAINER */
    addNewTaskBtn.classList.remove("project-addTask");
    addNewTaskBtn.classList.add("add-form");
    setForm(addNewTaskBtn);
    setAddFormListeners();
}

function displayTaskContainer(taskObj) {
    const displayCtn = document.querySelector(".display-ctn");
    const taskCardCtn = document.createElement("div");
    const projectAddTask = document.querySelector(".project-addTask");
    taskCardCtn.classList.add("task-card-container");
    displayTaskCard(taskObj, taskCardCtn);
    displayCtn.insertBefore(taskCardCtn, projectAddTask);
  }

export { displayAddTaskForm,displayTaskContainer};