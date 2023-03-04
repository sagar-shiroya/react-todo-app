import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newtask, setNewTask] = useState("");

  const addTask = () => {
    if (newtask === "") return;
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newtask,
    };
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (val) => {
    // const newTodoList = todoList.filter((task) => {
    //   if (task === val) return false;
    //   else return true;
    // });
    //Alternative of above code
    const newTodoList = todoList.filter((task) => task.id !== val);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>What do you need to do today?</h1>
      <div className="addTask">
        <input
          type="text"
          name="Add Task"
          value={newtask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Enter task detail.."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="listTask">
        {todoList.map((task, key) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              key={key}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
      <div className="footer">
        <span>©Sagar Shiroya</span>
      </div>
    </div>
  );
}

export default App;
