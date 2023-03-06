import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
export const Task = (props) => {
  return (
    <div className="task" key={props.key}>
      <h2 className={props.isCompleted ? "completed" : "none"}>
        {props.taskName}
      </h2>
      <button onClick={() => props.updateTask(props.id)}>
        <IoCheckmarkDoneCircleSharp />
      </button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
