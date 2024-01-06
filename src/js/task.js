import { setForm } from "./form.js";
import { setAddFormListeners} from "./listeners.js";


function displayAddTaskForm() {
    const addNewTaskBtn = document.querySelector(".project-addTask");
    /* MAKING THE ADD TASK DIV INTO FORM CONTAINER */
    addNewTaskBtn.classList.remove("project-addTask");
    addNewTaskBtn.classList.add("add-form");
    setForm(addNewTaskBtn);
    setAddFormListeners();
}





export { displayAddTaskForm};