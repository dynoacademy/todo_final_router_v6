import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthCheck from "../../middleware/AuthCheck";
import NavBar from "../NavBar";

const AddToDo = () => {
  const todoText = useRef();

  const navigate = useNavigate();

  // Auth check...

  AuthCheck();

  const addToDo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value;

    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    initialTodo.push(todoString);

    localStorage.setItem("todo", JSON.stringify(initialTodo));

    navigate("/");
  };

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h1>Add to-do:</h1> <br />
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />
          <button>Save to-do</button>
        </form>
      </div>
    </>
  );
};

export default AddToDo;
