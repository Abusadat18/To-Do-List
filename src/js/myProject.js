import { displayNewProjectForm } from "./form";
import { setAddTask, setCheckBoxes, setDeleteBtns, setModifyBtns, setViewBtns } from "./listeners";
import { allotMemory, isEmptyInLocalStorage, retrieveFromLocalStorage } from "./storage";
import { displayTaskContainer } from "./task";

function setMyProjects() {
    const projectCards = document.querySelectorAll(".project-card");
    const inboxBtn = document.querySelector(".sidebar-inbox");
    projectCards.forEach((card) => {
        card.addEventListener("click", viewProject);
    })
    inboxBtn.addEventListener("click", viewProject);
}

function viewProject(e) {
    const displayCtn = document.querySelector(".display-ctn");
    const title = e.currentTarget.querySelector("p").textContent;
    removeActiveClassForAll();
    setActiveClass(e.currentTarget);
    displayProject(displayCtn, title);
    setAddTask();
    if (!isEmptyInLocalStorage(title)) {
        viewTasks(title);
        setModifyBtns();
        setDeleteBtns();
        setViewBtns();
        setCheckBoxes();
    }
}

function viewTasks(key) {
    const taskCards = retrieveFromLocalStorage(key);
    console.log(taskCards);
    taskCards.forEach((card) => {
            displayTaskContainer(card);
    })
  }

function displayProject(element,title) {
    element.innerHTML = `
      <div class="project-title">
        <h3>${title}</h3>
      </div>
      <div class="project-addTask">
        <img src="./img/add-normal.svg" alt="" width="30" height="30" />
        <p>Add Task</p>
      </div>`;
}

function setAddProject() {
    const addProjectBtn = document.querySelector(".sidebar-createProject");
    addProjectBtn.addEventListener("click", addProjectBtnListener, { once: true });
}

function addProjectBtnListener(e) {
    const addProjectBtn = e.currentTarget;
    addProjectBtn.classList.remove("sidebar-createProject");
    addProjectBtn.classList.add("sidebar-form");
    displayNewProjectForm(addProjectBtn);
    const crossBtn = addProjectBtn.querySelector(".projectForm-cross");
    const tickBtn = addProjectBtn.querySelector(".projectForm-tick");
    crossBtn.addEventListener("click", projectCrossBtn);
    tickBtn.addEventListener("click", projectTickBtn);
}

function projectCrossBtn(e) {
    e.stopPropagation();
    const addProjectFormCtn = e.currentTarget.parentNode.parentNode;
    revertProjectForm(addProjectFormCtn);
}

function revertProjectForm(element) {
    element.classList.remove("sidebar-form");
    element.classList.add("sidebar-createProject");
    displayAddProjectBtn(element);
    setAddProject();
}

function projectTickBtn(e) {
    e.stopPropagation();
    const addProjectFormCtn = e.currentTarget.parentNode.parentNode;
    const projectsCtn = document.querySelector(".myProjects-content");
    const getProjectTitle = addProjectFormCtn.querySelector(".projectFormTitle").value;
    projectsCtn.appendChild(createNewProject(getProjectTitle));
    allotMemory(`#${getProjectTitle}`);
    revertProjectForm(addProjectFormCtn);
    setSidebarDeleteBtns();
    setMyProjects();
    const displayCtn = document.querySelector(".display-ctn");
    const projectCard = projectsCtn.lastElementChild;
    displayProject(displayCtn, projectCard.firstElementChild.textContent);
    setAddTask();
    removeActiveClassForAll();
    setActiveClass(projectCard)
}

function createNewProject(projectTitle) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
        <p>#${projectTitle}</p>
        <img src="./img/delete-btn.svg" alt="" />
    `;
    return projectCard;
}

function displayAddProjectBtn(element) {
    element.innerHTML = `
    <img src="./img/add-normal.svg" alt="" />
    <p>Create New Project</p>`;
}

function setSidebarDeleteBtns() {
    const deleteBtns = document.querySelectorAll(".project-card > img");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", ProjectDeleteBtn);
    })
}

function ProjectDeleteBtn(e) {
    e.stopPropagation();
    const projectCard = e.currentTarget.parentNode;
    const projectsCtn = document.querySelector(".myProjects-content");
    projectsCtn.removeChild(projectCard);
}

function getCurrentProjectName() {
    const nameCtn = document.querySelector(".active");
    const projectName = nameCtn.querySelector("p").textContent;
    return projectName;
}

function setActiveClass(element) {
    element.classList.add("active");
}

function removeActiveClassForAll() {
    const projectCards = document.querySelectorAll(".project-card");
    const inboxBtn = document.querySelector(".sidebar-inbox");
    inboxBtn.classList.remove("active");
    if (projectCards) {
        projectCards.forEach((card) => {
            card.classList.remove("active");
        })
    }
}

export { setMyProjects ,setAddProject,setSidebarDeleteBtns,getCurrentProjectName};