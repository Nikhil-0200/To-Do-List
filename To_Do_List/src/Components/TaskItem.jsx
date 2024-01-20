function TaskItem(props) {
    return <div>Task Item: {props.title} {props.completed} {props.taskAssignedTo} <button onClick={props.DltBtn}>Delete Task</button> <button onClick={props.UptBtn}>Toggle Task</button>
    </div>;
  }
  
  export default TaskItem;