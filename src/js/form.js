import {createTask , displayTaskCard,displayAddTask,appendProjectAddTask,getTaskCardValues} from "./taskCard.js";
import { setAddTask, setAllTaskOperation } from "./listeners.js";
import { allotIndividualTaskInLocalS } from "./storage.js";
import { getCurrentProjectName } from "./myProject.js";

function setForm(element) {
    element.innerHTML = `<div class="add-task-name">
    <input
      type="text"
      name=""
      id="newTaskName"
      class="newTaskName"
      placeholder="Task Name"
    />
  </div>
  <div class="add-task-description">
    <textarea
      name=""
      id=""
      class="newTaskDesc"
      cols=""
      rows="4"
      placeholder="Task Description"
    ></textarea>
  </div>
  <div class="add-task-additionals">
    <div>
      <div class="form-setDueDate">
        <label for="newDueDate">Due Date:</label>
        <input type="date" name="" id="newDueDate" class="newDueDate" />
      </div>
      <div>
        <select class="form-setPriority" name="" id="">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
    <div>
      <button class="form-cancel-btn" type="button">Cancel</button>
      <button class="form-add-btn" type="button">Add Task</button>
    </div>
  </div>`
};

function setModifyForm(element) {
    const taskObj = getTaskCardValues(element);
    element.innerHTML = `<div class="add-task-name">
    <input
      type="text"
      name=""
      id="newTaskName"
      class="newTaskName"
      placeholder="Task Name"
      value="${taskObj.name}"
    />
  </div>
  <div class="add-task-description">
    <textarea
      name=""
      id=""
      class="newTaskDesc"
      cols=""
      rows="4"
      placeholder="Task Description"
    >${taskObj.description}</textarea>
  </div>
  <div class="add-task-additionals">
    <div>
      <div class="form-setDueDate">
        <label for="newDueDate">Due Date:</label>
        <input type="date" name="" id="newDueDate" class="newDueDate" value="${taskObj.dueDate}" />
      </div>
      <div>
        <select class="form-setPriority" name="" id="">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
    <div>
      <button class="mod-form-cancel-btn" type="button">Cancel</button>
      <button class="mod-form-add-btn" type="button">Add Task</button>
    </div>
  </div>`;
    setPriority(taskObj.priority);
}

function cancelTaskBtn(e) {
    e.stopPropagation();
    const formCtn = e.target.parentNode.parentNode.parentNode;
    /* REVERSING THE FORM BACK TO ADDD TASK DIV */
    formCtn.classList.remove("add-form");
    formCtn.classList.add("project-addTask");
    displayAddTask(formCtn);
    setAddTask();
}

function addTaskBtn(e) {
    e.stopPropagation();
    const formCtn = e.currentTarget.parentNode.parentNode.parentNode;
    /* CONVERTING FORM CTN INTO TASK CARD */
    formCtn.classList.remove("add-form");
    formCtn.classList.add("task-card-container");
    const formValue = getFormValues(formCtn);
    const newTask = createTask(formValue.name, formValue.description, formValue.dueDate, formValue.priority);
    allotIndividualTaskInLocalS(getCurrentProjectName(), newTask);
    displayTaskCard(newTask, formCtn);
    appendProjectAddTask();
    setAddTask();
    setAllTaskOperation();
}

function setPriority(value) {
    const options = document.querySelector(".form-setPriority").querySelectorAll("option");
    if (value === "High") {
        options[0].setAttribute("selected", true);
    }
    else if (value === "Medium") {
        options[1].setAttribute("selected", true);
    }
    else {
        options[2].setAttribute("selected", true);
    }
}

function getFormValues(formCtn) {
    const name = formCtn.querySelector(".newTaskName").value;
    const description = formCtn.querySelector(".newTaskDesc").value;
    const dueDate = formCtn.querySelector(".newDueDate").value;
    const priority = formCtn.querySelector(".form-setPriority").value;
    return { name, description, dueDate, priority };
}

function displayNewProjectForm(element) {
    element.innerHTML = `
    <input type="text" name="" id="projectFormTitle" class="projectFormTitle" placeholder="Project Title">
    <div>
        <img class="projectForm-cross" src="./img/tick.svg" alt="">
        <img class="projectForm-tick" src="./img/cross.svg" alt="">
    </div>`;
}

export { setForm ,setModifyForm,addTaskBtn,cancelTaskBtn,setPriority ,getFormValues,displayNewProjectForm};