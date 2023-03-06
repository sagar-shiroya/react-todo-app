import { useState } from "react";
import "./App.css";
import { Task } from "./Task";
import { Footer } from "./Footer";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newtask, setNewTask] = useState("");

  const addTask = () => {
    if (newtask === "") return;
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newtask,
      completed: false,
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

  const updateTask = (id) => {
    // const newTodoList = todoList.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, completed: true };
    //   } else {
    //     return task;
    //   }
    // });
    // console.log(newTodoList);
    // setTodoList(newTodoList);
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
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
              isCompleted={task.completed}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
