import "../css/styles.css";
import { setAddTask , setAllTaskOperation } from "./listeners.js";
import { setInbox } from "./inbox.js";
import { setMyProjects ,setAddProject ,setSidebarDeleteBtns} from "./myProject.js";
import { setHomeInLocalStorage } from "./home.js";

const contentCtn = document.querySelector(".display-ctn");

document.addEventListener("DOMContentLoaded", () => {
    setInbox(contentCtn);
    setAddTask();
    setAllTaskOperation();
    setMyProjects();
    setAddProject();
    setSidebarDeleteBtns();
    setHomeInLocalStorage();
});

