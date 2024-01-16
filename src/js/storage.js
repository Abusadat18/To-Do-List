import { getTaskCardValues } from "./taskCard";

const Storage = {

}

function createArr(name) {
    Storage[name] = [];
}

function pushObj(name, taskObj) {
    Storage[name].push(taskObj);
}

function replaceArray(name, array) {
    Storage[name] = array;
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

function isEmptyInLocalStorage(key) {
    if (localStorage.getItem(key) == "[]") {
        console.log("hii");
        return true; 
    }
}

function allotMemory(key) {
    createArr(key);
    addToLocalStorage(key);
}

function allotIndividualTaskInLocalS(key,taskObj) {
    pushObj(key, taskObj);
    addToLocalStorage(key);
}

function deleteATaskFromLocalS(key, name) {
    let value = retrieveFromLocalStorage(key);
    value = value.filter((taskObj) => {
        if (taskObj.name != name) {
            return true;
        }
    })
    replaceArray(key, value);
    addToLocalStorage(key);
}
    
export { createArr, storeAllTask ,retrieveFromLocalStorage,allotMemory,isEmptyInLocalStorage ,pushObj,addToLocalStorage};
export { allotIndividualTaskInLocalS ,deleteATaskFromLocalS };
