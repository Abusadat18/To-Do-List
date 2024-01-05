export function setInbox(element) {
    element.innerHTML = `
      <div class="project-title">
        <h3>Index</h3>
      </div>
        <!-- Task Card Begins -->
        <div class="task-card">
          <div class="task-checkbox">
            <input type="checkbox" name="" id="isTaskDone" />
          </div>
          <div class="task-info">
            <h4>Eat an Apple</h4>
            <p class="task-description">
              I am going to eat a red royal gala apple from the fridge
            </p>
            <div class="task-additionals">
              <div class="notes">
                <img
                  src="./img/view-note-btn.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </div>
              <div class="priority">
                <img src="./img/flag.svg" alt="" width="20" height="20" />
                <p>High</p>
              </div>
              <div class="task-dueDate">
                <img src="./img/due-date.svg" alt="" width="20" height="20" />
                <p>10 July 23</p>
              </div>
            </div>
          </div>
          <div class="task-operation">
            <div class="add-note-btn">
              <img
                src="./img/add-note-btn.svg"
                alt=""
                width="30"
                height="30"
              />
            </div>
            <div class="modify-btn">
              <img src="./img/modify-btn.svg" alt="" width="30" height="30" />
            </div>
            <div class="delete-btn">
              <img src="./img/delete-btn.svg" alt="" width="30" height="30" />
            </div>
          </div>
        </div>
        <!-- Task Card Ends -->
      
      <!-- ADD TASK BUTTON INSIDE DISPLAY CTN STARTS-->
      <div class="project-addTask">
        <img src="./img/add-normal.svg" alt="" width="30" height="30" />
        <p>Add Task</p>
      </div>
      <!-- ADD TASK BUTTON INSIDE DISPLAY CTN ENDS-->
    `
};