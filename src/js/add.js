import { displayAddTaskForm , cancelTaskForm ,addTaskFormBtn,taskDeleteBtn} from "./display.js";

function setAddTask() {
    const addTaskBtn = document.querySelector(".project-addTask");
    addTaskBtn.addEventListener("click", displayAddTaskForm,{once:true});
}

function setAddFormListeners() {
    const cancelBtn = document.querySelector(".form-cancel-btn");
    const formAddTaskBtn = document.querySelector(".form-add-btn");
    cancelBtn.addEventListener("click", cancelTaskForm);
    formAddTaskBtn.addEventListener("click", addTaskFormBtn);
}

function setDeleteBtns() {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click",taskDeleteBtn)
    })
}

export { setAddTask ,setAddFormListeners,setDeleteBtns};