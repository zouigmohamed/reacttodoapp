import { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";
import "./css/todo.css";
let count = 0;
function Todo() {
  const [to_dos, setTo_dos] = useState([]);

  // const add = () => {
  //   setTo_dos([
  //     ...to_dos,
  //     { num: count++, text: inputValue, display: "" },
  //   ]);
  //   inputRef.current.value = "";
  //   localStorage.setItem("todos_count", count);
  // };
  const handleSubmit = () => {
    const inputValue = inputRef.current.value.trim(); // Trim leading and trailing whitespace
    if (inputValue) {
      setTo_dos((prevData) => [
        ...prevData,
        { num: prevData.length + 1, text: inputValue, display: "" },
      ]);
      inputRef.current.value = ""; // Clear the input field
    }
  };
  useEffect(() => {
    setTo_dos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(to_dos));
    }, 100);
  }, [to_dos]);
  const inputRef = useRef(null);
  return (
    <div className="todo">
      <div className="todo-header">To do list</div>
      <div className="todo-add">
        <input
          type="text"
          placeholder="Add your task"
          ref={inputRef}
          className="todo-input"
        />
        <div className="todo-add-btn" onClick={() => handleSubmit()}>
          Add
        </div>
      </div>
      <div className="todo-list">
        {to_dos.map((item) => (
          <>
            <TodoItems
              key={item.num}
              num={item.num}
              display={item.display}
              text={item.text}
              setToDos={setTo_dos}
            />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default Todo;
