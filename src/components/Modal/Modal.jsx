
import "./Modal.scss"

function Modal({ isOpen, setOpen, task, isComplated }) {
    const modalClick = (e) => {
      if (e.target.matches(".modal--open")) {
        setOpen(false);
      }
    };
    return (
      <div
        onClick={modalClick}
        className={`modal ${isOpen ? "modal--open" : ""}`}
      >
        <div className={`modal__content ${isOpen ? "modal__content--open" : ""}`}>
          <p>INFO:</p>
          <div className="modal__content__item">
            <p>{task.id}</p>
            <p>{task.title}</p>
            <p>{isComplated ? "Done" : "Not"}</p>
          </div>
        </div>
      </div>
    );
  }

  export default Modal