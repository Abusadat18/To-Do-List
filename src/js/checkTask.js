function checkTask(e) {
    const displayCtn = document.querySelector(".display-ctn");
    const taskCtn = e.currentTarget.parentNode.parentNode.parentNode;
    displayCtn.removeChild(taskCtn);
}

export { checkTask };