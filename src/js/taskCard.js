import { setModifyForm ,getFormValues } from "./form.js";
import { setAllTaskOperation } from "./listeners.js";
import { displayViewMode, closeViewBtnListener } from "./view.js";
import { addBlur } from "./blur.js";
import { checkTask } from "./checkTask.js";
import { deleteATaskFromLocalS, modifyTaskFromLocalS } from "./storage.js";
import { getCurrentProjectName } from "./myProject.js";

const createTask = function (name, description, dueDate, priority) {
    return { name, description, dueDate, priority };
};

function displayTaskCard(taskObj,element) {
  element.innerHTML = `
  <div class="overlay hide"></div>
  <div class="task-card">  
  <div class="task-checkbox">
    <input type="checkbox" name="" id="isTaskDone" />
  </div>
  <div class="task-info">
    <h4>${taskObj.name}</h4>
    <p class="task-description">
      ${minimizeDescription(taskObj.description)}
    </p>
    <span class="hide">${taskObj.description}</span>
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
    const cardToDel = e.currentTarget.parentNode.parentNode.parentNode;
    const taskTitle = getTaskCardValues(cardToDel.lastElementChild).name;
    deleteATaskFromLocalS(getCurrentProjectName(), taskTitle);
    displayCtn.removeChild(cardToDel);
}

function taskModifyBtn(e) {
    const cardToModify = e.currentTarget.parentNode.parentNode.parentNode;
    const taskObj = getTaskCardValues(cardToModify);
    cardToModify.classList.remove("task-card-container");
    cardToModify.classList.add("add-form");
    setModifyForm(cardToModify);
    const modifyCancelBtn = cardToModify.querySelector(".mod-form-cancel-btn");
    const modifyAddBtn = cardToModify.querySelector(".mod-form-add-btn");
    modifyCancelBtn.addEventListener("click", (e) => {
      ModifyCancelBtnListener(e, taskObj, cardToModify);
    });
    modifyAddBtn.addEventListener("click", (e) => {
      ModifyAddBtnListener(e,taskObj ,cardToModify);
    })
}

function ModifyCancelBtnListener(e, taskObj, cardToModify) {
    e.stopPropagation();
    const formCtn = cardToModify;
    /* CONVERTING FORM CTN INTO TASK CARD */
    formCtn.classList.remove("add-form");
    formCtn.classList.add("task-card-container");
    displayTaskCard(taskObj, formCtn);
    setAllTaskOperation();
}

function ModifyAddBtnListener(e,oldTaskObj ,cardToModify) {
  e.stopPropagation();
  const formCtn = cardToModify;
  /* CONVERTING FORM CTN INTO TASK CARD */
  formCtn.classList.remove("add-form");
  formCtn.classList.add("task-card-container");
  const taskObj = getFormValues(formCtn);
  modifyTaskFromLocalS(getCurrentProjectName(), oldTaskObj.name, taskObj);
  displayTaskCard(taskObj, formCtn);
  setAllTaskOperation();
}

function taskViewBtn(e) {
  const selectedCard = e.currentTarget.parentNode.parentNode.parentNode;
  const taskObj = getTaskCardValues(selectedCard);
  const viewCtn = selectedCard.querySelector(".overlay");
  addBlur();
  viewCtn.classList.remove("hide");
  displayViewMode(viewCtn, taskObj);
  const closeBtn = viewCtn.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeViewBtnListener);
}

function getTaskCardValues(element) {
    const name = element.querySelector(".task-info h4").textContent;
    const description = element.querySelector(".task-info > .hide").textContent;
    const dueDate = element.querySelector(".task-dueDate p").textContent;
    const priority = element.querySelector(".priority p").textContent;
    return { name, description, dueDate, priority };
}

function minimizeDescription(text) {
  if (text.length <= 75) {
    return text;
  } 
  else {
    return `${text.slice(0, 70)}...`;
  }
}

function taskCheckBox(e) {
  e.stopPropagation;
  checkTask(e);
}

export { createTask,displayAddTask ,appendProjectAddTask,displayTaskCard,taskDeleteBtn,taskModifyBtn,getTaskCardValues,taskViewBtn,taskCheckBox};