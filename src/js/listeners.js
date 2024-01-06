import { displayAddTaskForm } from "./task.js";
import { addTaskBtn as formAddTaskBtn,cancelTaskBtn as formCancelTaskBtn } from "./form.js";
import { taskDeleteBtn,taskModifyBtn } from "./taskCard.js";

function setAddTask() {
    const addTaskBtn = document.querySelector(".project-addTask");
    addTaskBtn.addEventListener("click", displayAddTaskForm,{once:true});
}

function setAddFormListeners() {
    const cancelBtn = document.querySelector(".form-cancel-btn");
    const addBtn = document.querySelector(".form-add-btn");
    cancelBtn.addEventListener("click", formCancelTaskBtn);
    addBtn.addEventListener("click", formAddTaskBtn);
}

function setDeleteBtns() {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click",taskDeleteBtn)
    })
}

function setModifyBtns() {
    const modifyBtns = document.querySelectorAll(".modify-btn");
    modifyBtns.forEach((btn) => {
        btn.addEventListener("click",taskModifyBtn)
    })
}

export { setAddTask ,setAddFormListeners,setDeleteBtns,setModifyBtns};