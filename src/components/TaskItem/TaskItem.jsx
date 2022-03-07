import "./TaskItem.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";
function TaskItem({ task, onDelete, isComplated }) {
  const [open, setOpen] = useState(false);
  const clickOpen = () => {
    setOpen((x) => !x);
  };
  return (
    <div className="main">
      <div className="task">
        <p className="title">
          {task.id} | {task.title} | {isComplated ? "Done" : "Not"}{" "}
        </p>

        <input className="input" type="checkbox" />

        <button onClick={clickOpen} className="open-modal info">
          INFO
        </button>
        <button
          onClick={() => {
            onDelete(task.id);
          }}
          className="delete"
          type="button"
        >
          DELETE
        </button>
      </div>
      <Modal
        setOpen={setOpen}
        isOpen={open}
        task={task}
        isComplated={isComplated}
      />
    </div>
  );
}



export default TaskItem;
