function TaskItem(props) {
    return <div>
    Task Item: {props.title} 
    <br /> <br />
    <p style={{backgroundColor: props.completed ? "Skyblue" : "pink"}}>
      Task Completed: {props.completed ? "Yes" : "No"}
    </p> 
    <br /> 
    <p>Task Assigned To: {props.taskAssignedTo}</p>
    <br /> 
    <button onClick={props.DltBtn}>Delete Task</button> 
    <button onClick={props.UptBtn}>Toggle Task</button>
    <br />
    <br />
    <hr />
    </div>;
  }
  
  export default TaskItem;