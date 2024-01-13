import "../css/styles.css";
import { setAddTask ,setDeleteBtns, setModifyBtns,setViewBtns,setCheckBoxes } from "./listeners.js";
import { setInbox } from "./inbox.js";
import { setMyProjects ,setAddProject } from "./myProject.js";

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
});