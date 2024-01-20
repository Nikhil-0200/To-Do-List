import React, { useState } from "react";
import "./App.css";
import TaskItem from "./Components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {

    const value = 
    event.target.type == "checkbox" ? event.target.checked : event.target.value

    const newState = {
      ...formState,
      [event.target.name]: value 
    }
    setFormState(newState)
  }

  function handleSubmit(event) {
    event.preventDefault();

    const storeData = {
      ...formState,
      id: Date.now() + Math.random()
    }

    const newTask = [
      ...tasks, storeData
    ]

    setTasks(newTask)

    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }

  const RemItems = [
    ...tasks
  ] 

  function DltBtn(index){

    const ddd = RemItems.filter((ele, i)=>i != index)

    setTasks(ddd)

  }

function UptBtn(index){
  setTasks((prevTask)=>{
    const UptData = [...prevTask]
    UptData[index].completed = !UptData[index].completed
    return UptData 
  })
}

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" onChange={handleChange}/>
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange}/>
          </label>
          <select name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index,) => (
        <TaskItem 
        key={index}
        title={item.task} 
        completed={item.completed}  
        taskAssignedTo={item.taskAssignedTo}  
        DltBtn={()=>DltBtn(index)}
        UptBtn = {()=>UptBtn(index)}
        />
      ))}
    </>
  );
}

export default App;