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
}

function addToLocalStorage(key) {
    const value = JSON.stringify(Storage[key]);
    localStorage.setItem(key, value);
}

function retrieveFromLocalStorage(key) {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
}

export { createArr, storeAllTask ,retrieveFromLocalStorage };

