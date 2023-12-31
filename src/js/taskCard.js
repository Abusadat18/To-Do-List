import { setModifyForm ,getFormValues } from "./form.js";
import { setDeleteBtns,setModifyBtns } from "./listeners.js";

const createTask = function (name, description, dueDate, priority) {
    return { name, description, dueDate, priority };
};

function displayTaskCard(taskObj,element) {
    element.innerHTML = `<div class="task-checkbox">
    <input type="checkbox" name="" id="isTaskDone" />
  </div>
  <div class="task-info">
    <h4>${taskObj.name}</h4>
    <p class="task-description">
      ${taskObj.description}
    </p>
    <div class="task-additionals">
      <div class="priority">
        <img src="./img/flag.svg" alt="" width="25" height="25" />
        <p>${taskObj.priority}</p>
      </div>
      <div class="task-dueDate">
        <img src="./img/due-date.svg" alt="" width="25" height="25" />
        <p>${taskObj.dueDate}</p>
      </div>
    </div>
  </div>
  <div class="task-operation">
    <div class="view-note-btn">
      <img
      src="./img/view-btn.svg"
      alt=""
      width="30"
      height="30"
      />
    </div>
    <div class="modify-btn">
      <img src="./img/modify-btn.svg" alt="" width="30" height="30" />
    </div>
    <div class="delete-btn">
      <img src="./img/delete-btn.svg" alt="" width="30" height="30" />
    </div>
  </div>`;
}

function displayAddTask(element) {
    element.innerHTML = `<img src="./img/add-normal.svg" alt="" width="30" height="30" />
    <p>Add Task</p>`;
};

function appendProjectAddTask() {
    const displayCtn = document.querySelector(".display-ctn");
    const projectAddTask = document.createElement("div");
    projectAddTask.classList.add("project-addTask");
    displayAddTask(projectAddTask);
    displayCtn.appendChild(projectAddTask);
}

function taskDeleteBtn(e) {
    const displayCtn = document.querySelector(".display-ctn");
    const cardToDel = e.target.parentNode.parentNode.parentNode;
    displayCtn.removeChild(cardToDel);
}

function taskModifyBtn(e) {
    const cardToModify = e.target.parentNode.parentNode.parentNode;
    const taskObj = getTaskCardValues(cardToModify);
    cardToModify.classList.remove("task-card");
    cardToModify.classList.add("add-form");
    setModifyForm(cardToModify);
    const modifyCancelBtn = cardToModify.querySelector(".mod-form-cancel-btn");
    const modifyAddBtn = cardToModify.querySelector(".mod-form-add-btn");
    modifyCancelBtn.addEventListener("click", (e) => {
      ModifyCancelBtnListener(e, taskObj, cardToModify);
    });
    modifyAddBtn.addEventListener("click", (e) => {
      ModifyAddBtnListener(e, cardToModify);
    })
}

function ModifyCancelBtnListener(e, taskObj, cardToModify) {
    e.stopPropagation();
    const formCtn = cardToModify;
    /* CONVERTING FORM CTN INTO TASK CARD */
    formCtn.classList.remove("add-form");
    formCtn.classList.add("task-card");
    displayTaskCard(taskObj, formCtn);
    setDeleteBtns();
    setModifyBtns();
}

function ModifyAddBtnListener(e, cardToModify) {
  e.stopPropagation();
  const formCtn = cardToModify;
  /* CONVERTING FORM CTN INTO TASK CARD */
  formCtn.classList.remove("add-form");
  formCtn.classList.add("task-card");
  const taskObj = getFormValues(formCtn);
  displayTaskCard(taskObj, formCtn);
  setDeleteBtns();
  setModifyBtns();
}

function getTaskCardValues(element) {
    const name = element.querySelector(".task-info h4").textContent;
    const description = element.querySelector(".task-description").textContent.trim();
    const dueDate = element.querySelector(".task-dueDate p").textContent;
    const priority = element.querySelector(".priority p").textContent;

    return { name, description, dueDate, priority };
}



export { createTask,displayAddTask ,appendProjectAddTask,displayTaskCard,taskDeleteBtn,taskModifyBtn,getTaskCardValues};