function addBlur() {
    const taskCards = document.querySelectorAll(".task-card");
    const title = document.querySelector(".project-title");
    const addTaskBtn = document.querySelector(".project-addTask");
    taskCards.forEach((card) => {
        card.classList.add("blur-bg");
    })
    title.classList.add("blur-bg");
    addTaskBtn.classList.add("blur-bg");
}

function removeBlur() {
    const taskCards = document.querySelectorAll(".task-card");
    const title = document.querySelector(".project-title");
    const addTaskBtn = document.querySelector(".project-addTask");
    taskCards.forEach((card) => {
        card.classList.remove("blur-bg");
    })
    title.classList.remove("blur-bg");
    addTaskBtn.classList.remove("blur-bg");
}

export { addBlur ,removeBlur  };