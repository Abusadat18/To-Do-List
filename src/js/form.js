function setForm(element) {
    element.innerHTML = `<div class="add-task-name">
    <input
      type="text"
      name=""
      id="newTaskName"
      class="newTaskName"
      placeholder="Task Name"
    />
  </div>
  <div class="add-task-description">
    <textarea
      name=""
      id=""
      cols=""
      rows="4"
      placeholder="Task Description"
    ></textarea>
  </div>
  <div class="add-task-additionals">
    <div>
      <div class="form-setDueDate">
        <label for="newDueDate">Due Date:</label>
        <input type="date" name="" id="newDueDate" class="newDueDate" />
      </div>
      <div>
        <select class="form-setPriority" name="" id="">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button type="button" class="form-newNote-btn">
        <img
          src="./img/add-note-btn.svg"
          alt=""
          width="25"
          height="25"
        />
        <p>Add Note</p>
      </button>
    </div>
    <div>
      <button class="form-cancel-btn" type="button">Cancel</button>
      <button class="form-add-btn" type="button">Add Task</button>
    </div>
  </div>`
};

export { setForm };