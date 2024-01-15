import "../css/styles.css";
import { setAddTask ,setDeleteBtns, setModifyBtns,setViewBtns,setCheckBoxes } from "./listeners.js";
import { saveInbox, setInbox, setViewInbox } from "./inbox.js";
import { setMyProjects ,setAddProject ,setSidebarDeleteBtns} from "./myProject.js";

const contentCtn = document.querySelector(".display-ctn");

document.addEventListener("DOMContentLoaded", () => {
    setInbox(contentCtn);
    setAddTask();
    setDeleteBtns();
    setModifyBtns();
    setViewBtns();
    setCheckBoxes();
    setMyProjects();
    setAddProject();
    setSidebarDeleteBtns();
    saveInbox();
});