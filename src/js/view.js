import { removeBlur } from "./blur";

function displayViewMode(element, taskObj) {
    element.innerHTML = `<h4>${taskObj.name}</h4>
    <p>${taskObj.description}</p>
    <div>
      <div class="view-additionals1">
          <div class="priority">
            <img src="./img/flag.svg" alt="" width="25" height="25" />
            <p>${taskObj.priority}</p>
          </div>
          <div class="task-dueDate">
            <img src="./img/due-date.svg" alt="" width="25" height="25" />
            <p>${taskObj.dueDate}</p>
          </div>
      </div>
      <div class="view-additionals2">
          <button class="close-btn" type="button">Close</button>
      </div>
    </div>`
}

function closeViewBtnListener(e) {
    e.stopPropagation();
    const viewCtn = e.currentTarget.parentNode.parentNode.parentNode;
    removeBlur();
    viewCtn.classList.add("hide");
}

export { displayViewMode, closeViewBtnListener };