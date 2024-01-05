import "../css/styles.css";
import { setAddTask ,setDeleteBtns } from "./add.js";
import { setInbox } from "./inbox.js";

const contentCtn = document.querySelector(".display-ctn");

document.addEventListener("DOMContentLoaded", () => {
    setInbox(contentCtn);
    setAddTask();
    setDeleteBtns();
});