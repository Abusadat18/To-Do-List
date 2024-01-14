import { getTaskCardValues } from "./taskCard";

const Storage = {

}

function createArr(name) {
    Storage[name] = [];
}

function pushObj(name, taskObj) {
    Storage[name].push(taskObj);
}

function storeAllTask(projectName) {
    const displayCtn = document.querySelector(".display-ctn");
    const taskCards = displayCtn.querySelectorAll(".task-card");
    taskCards.forEach((card) => {
        const taskObj = getTaskCardValues(card);
        pushObj(projectName, taskObj);
    })
    addToLocalStorage(projectName);
    /* console.log(JSON.parse(localStorage.getItem(projectName))); */
}

function addToLocalStorage(key) {
    const value = JSON.stringify(Storage[key]);
    localStorage.setItem(key, value);
}



export { createArr, storeAllTask };

