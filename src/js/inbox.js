export function setInbox(element) {
    element.innerHTML = `
      <div class="project-title">
        <h3>Index</h3>
      </div>
        <!-- Task Card Begins -->
        <div class="task-card" data-key="1">
          <div class="task-checkbox">
            <input type="checkbox" name="" id="isTaskDone" />
          </div>
          <div class="task-info">
            <h4>Eat an Apple</h4>
            <p class="task-description">
              I am going to eat a red royal gala apple from the fridge
            </p>
            <span class="hide">I am going to eat a red royal gala apple from the fridge</span>
            <div class="task-additionals">
              <div class="priority">
                <img src="./img/flag.svg" alt="" width="25" height="25" />
                <p>High</p>
              </div>
              <div class="task-dueDate">
                <img src="./img/due-date.svg" alt="" width="25" height="25" />
                <p>2024-01-20</p>
              </div>
            </div>
          </div>
          <div class="task-operation">
            <div class="view-note-btn">
              <img
                src="./img/view-btn.svg"
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
      <div class="overlay">
        <h4>Eat an Apple</h4>
        <p>I am going to eat a red royal gala apple from the fridge</p>
        <div>
          <div class="view-additionals1">
              <div class="priority">
                <img src="./img/flag.svg" alt="" width="25" height="25" />
                <p>High</p>
              </div>
              <div class="task-dueDate">
                <img src="./img/due-date.svg" alt="" width="25" height="25" />
                <p>2024-01-20</p>
              </div>
          </div>
          <div class="view-additionals2">
              <button class="close-btn" type="button">Close</button>
          </div>
        </div>
      </div>
    `
};