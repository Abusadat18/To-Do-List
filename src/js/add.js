import { displayAddTaskForm , cancelTaskForm} from "./display.js";

function setAddTask() {
    const addTaskBtn = document.querySelector(".project-addTask");
    addTaskBtn.addEventListener("click", displayAddTaskForm,{once:true});
}

function setAddFormListeners() {
    const cancelBtn = document.querySelector(".form-cancel-btn");
    cancelBtn.addEventListener("click", cancelTaskForm);
}

export { setAddTask ,setAddFormListeners};