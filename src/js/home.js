import { addToLocalStorage, createArr, pushObj } from "./storage"
import { createTask } from "./taskCard";

function setHomeInLocalStorage() {
    const title = "#Home";
    createArr(title);
    const task1 = createTask("Wake Up Early", "Don't sleep after Fajr.Make your plans for the day", "2024-01-15", "High");
    const task2 = createTask("Washing Clothes", "Will try to do this before noon", "2024-01-15", "Medium");
    const task3 = createTask("Appointment with doctor", "Annual health checkup", "2024-01-15", "Low");
    const task4 = createTask("Arabic Class", "Weekly class at @Burooj Institute", "2024-01-15", "High");
    pushObj(title, task1);
    pushObj(title, task2);
    pushObj(title, task3);
    pushObj(title, task4);
    addToLocalStorage(title);
}

export {setHomeInLocalStorage};