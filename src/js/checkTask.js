import { getCurrentProjectName } from "./myProject";
import { deleteATaskFromLocalS } from "./storage";
import { getTaskCardValues } from "./taskCard";

function checkTask(e) {
    const displayCtn = document.querySelector(".display-ctn");
    const taskCtn = e.currentTarget.parentNode.parentNode.parentNode;
    const taskTitle = getTaskCardValues(taskCtn.lastElementChild).name;
    deleteATaskFromLocalS(getCurrentProjectName(), taskTitle);
    displayCtn.removeChild(taskCtn);
}

export { checkTask };