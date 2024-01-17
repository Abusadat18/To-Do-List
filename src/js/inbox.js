import { convertDate, getTodayDate, incrementDate } from "./date";
import { setAddTask, setCheckBoxes, setDeleteBtns, setModifyBtns, setViewBtns } from "./listeners";
import { displayProject, removeActiveClassForAll, setActiveClass, viewTasks } from "./myProject";
import { createArr, isEmptyInLocalStorage, storeAllTask } from "./storage";
import { displayTaskContainer } from "./task";
import { createTask } from "./taskCard";

export function setInbox(element) {
  element.innerHTML = `
      <div class="project-title">
        <h3>Inbox</h3>
      </div>
      <div class="project-addTask">
        <img src="./img/add-normal.svg" alt="" width="30" height="30" />
        <p>Add Task</p>
      </div>
    `;
  displayTaskContainer(createTask("Fajr Salah", "The Prophet (ﷺ) said,The two Rakah before the dawn (Fajr) prayer are better than this world and all it contains.", convertDate(getTodayDate()), "High"));
  displayTaskContainer(createTask("Read Quran", "The Prophet (ﷺ) said, The best among you (Muslims) are those who learn the Quran and teach it.", convertDate(getTodayDate()), "High"));
  displayTaskContainer(createTask("Plan and Prepare Meals", "Take time to plan and prepare healthy meals for the day to ensure a balanced and nutritious diet.", convertDate(getTodayDate()), "Medium"));
  displayTaskContainer(createTask("Explore JavaScript Prototypes", "I'm diving into JavaScript prototypes to deepen my understanding of this crucial language feature. Starting with articles, tutorials, and official documentation, I'll cover prototype chains, constructor functions, and the prototype property. Through coding exercises and small projects, I'll apply my knowledge, engaging with online communities for support. Keeping a learning log, I aim to confidently integrate prototype-based patterns into my code by the due date.", incrementDate(5), "Medium"));
};

function saveInbox() {
  createArr("Inbox");
  storeAllTask("Inbox");
}

function displayInboxFromLocalS() {
  const displayCtn = document.querySelector(".display-ctn");
  const inboxCtn = document.querySelector(".sidebar-inbox");
  const title = "Inbox";
  removeActiveClassForAll();
  setActiveClass(inboxCtn);
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

export { saveInbox,displayInboxFromLocalS };