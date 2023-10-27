import cross from "./assets/cross.png";
import not_tick from "./assets/not_tick.png";
import tick from "./assets/tick.png";
import "./css/todoItems.css";

function TodoItems({ num, display, text, setToDos }) {
  const deleteTdo = (num) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.num !== num);
    setToDos(data);
  };
  const toggle = (num) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].num === num) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setToDos(data);
  };
  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(num);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        <div className="todo-items-text">{text}</div>
      </div>
      <img onClick={()=>deleteTdo(num)} className="todo-item-cross-icon" src={cross} alt="" />
    </div>
  );
}

export default TodoItems;
