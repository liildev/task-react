import TaskItem from "../TaskItem/TaskItem";

import "./TaskList.scss";
import { useState } from "react";

function TaskList() {
    const data = [
      { id: 1, title: "Apple", isComplated: true },
      { id: 2, title: "Potato", isComplated: false },
      { id: 3, title: "Banana", isComplated: true },
      { id: 4, title: "Apelsin", isComplated: false },
    ];
    const [tasks, settask] = useState(data);
    const handleDelete = (id) => {
      console.log(id);
      settask(state => state.filter(item => item.id !==id))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let taskInput = document.querySelector('#task-input')
        const lastEl = tasks[tasks.length-1] || {id:0}
        const data = {
          id: lastEl?.id+1,
          title: taskInput.value,
          isComplated: false
        }
        settask(state => [...state, data])
        taskInput.value = ''
    }

    let tasksNotFound = document.querySelector('.tasks')

    if(tasks.length <= 0) {
      tasksNotFound.textContent = 'TASKS NOT FOUND'
      tasksNotFound.style.color = 'var(--pink)'
    }
    return (
      <div className="header">
        <h1>Task List</h1>

        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            type="text"
            id="task-input"
            placeholder="What do you hava planned?"
          />

          <button id="task-submit" type="submit">
            ADD TASK
          </button>
        </form>

        <h2 className="tasks">TASKS</h2>
        {
          tasks.map((element, index) => {
            return <TaskItem key={index} onDelete={handleDelete} isComplated={element.isComplated} task={element} />;
          })
        }
        
      </div>

  );
}

export default TaskList;
