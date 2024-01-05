import { displayAddTask } from "./display.js";

const createTask = function (name, description, dueDate, priority) {
    return { name, description, dueDate, priority };
};

function displayTaskCard(taskObj,element) {
    const displayCtn = document.querySelector(".display-ctn");
    const projectAddTask = document.createElement("div");
    projectAddTask.classList.add("project-addTask");
    displayAddTask(projectAddTask);
    element.innerHTML = `<div class="task-checkbox">
    <input type="checkbox" name="" id="isTaskDone" />
  </div>
  <div class="task-info">
    <h4>${taskObj.name}</h4>
    <p class="task-description">
      ${taskObj.description}
    </p>
    <div class="task-additionals">
      <div class="notes">
        <img
          src="./img/view-note-btn.svg"
          alt=""
          width="20"
          height="20"
        />
      </div>
      <div class="priority">
        <img src="./img/flag.svg" alt="" width="20" height="20" />
        <p>${taskObj.priority}</p>
      </div>
      <div class="task-dueDate">
        <img src="./img/due-date.svg" alt="" width="20" height="20" />
        <p>${taskObj.dueDate}</p>
      </div>
    </div>
  </div>
  <div class="task-operation">
    <div class="add-note-btn">
      <img
        src="./img/add-note-btn.svg"
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
    
    displayCtn.appendChild(projectAddTask);
}

export { createTask, displayTaskCard };