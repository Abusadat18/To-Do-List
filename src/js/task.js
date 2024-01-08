import { setForm } from "./form.js";
import { setAddFormListeners} from "./listeners.js";


function displayAddTaskForm(e) {
    const addNewTaskBtn = document.querySelector(".project-addTask");
    console.log(e.target);
    /* MAKING THE ADD TASK DIV INTO FORM CONTAINER */
    addNewTaskBtn.classList.remove("project-addTask");
    addNewTaskBtn.classList.add("add-form");
    setForm(addNewTaskBtn);
    setAddFormListeners();
}





export { displayAddTaskForm};