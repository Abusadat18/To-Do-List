import { convertDate, getTodayDate } from "./date";
import { addToLocalStorage, createArr, pushObj } from "./storage"
import { createTask } from "./taskCard";

function setHomeInLocalStorage() {
    const title = "#Home";
    createArr(title);
    const task1 = createTask("Wake Up Early", "Don't sleep after Fajr.Make your plans for the day", convertDate(getTodayDate()), "High");
    const task2 = createTask("Washing Clothes", "Will try to do this before noon", convertDate(getTodayDate()), "Medium");
    const task3 = createTask("Appointment with doctor", "Annual health checkup", convertDate(getTodayDate()), "Low");
    const task4 = createTask("Arabic Class", "Weekly class at @Burooj Institute", convertDate(getTodayDate()), "High");
    pushObj(title, task1);
    pushObj(title, task2);
    pushObj(title, task3);
    pushObj(title, task4);
    addToLocalStorage(title);
}

export {setHomeInLocalStorage};