import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import { useState } from 'react';
import React from 'react';
import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateForm from './components/UpdateForm.jsx'
import Todos from './components/Todos';

function App() {

  //toDo State 
  var [toDo,setTodo] = useState([ ])

  //State to add new task
  var [Newtask,setNewtask] = useState("")
  //state to update data
  var [Updatetask,setUpdatetask] = useState("")

  //Add Task fn
  function addtask(){
    if(Newtask){
      let num = toDo.length+1; // creating id for task with current length
      let newtask = {id:num, title:Newtask, status:false} // setting up newtask as an object in temp var
      setTodo([...toDo,newtask])    //now setting this newtask in the current tasks
      setNewtask(""); //to clear the field after entering 
    }
  }

  //Delete Task fn
  function deltask(id){
    let newtasks = toDo.filter( task => task.id !==id) //we use filter method to exclude record with this id
    setTodo(newtasks)
  }

   //strike Task completed fn
   function completedtask(id){
    let newtask = toDo.map(task=>{if(task.id===id){ //map through array where the id matches 
      return ({...task, status:!task.status}) //making the status not equal to status 
    }
    return task;
  })
  setTodo(newtask)    //after doing updating the status in the main
  }

   //cancel Updated task fn
   function cancelupdate(){
    setUpdatetask("") //this cancel update is jus to clear the field 
  }

  //modify Task fn
  function modifytask(e){
    let newtask = {
      id : Updatetask.id,
      title: e.target.value,
      status:Updatetask.status ? true : false
    }
    setUpdatetask(newtask);
  }

  //update modified task fn
  function updatetask(){
    let filtertodo = [...toDo].filter( task => task.id !== Updatetask.id); //excluding that task from toDo
    // let updated = [...filtertodo,Updatetask] //now adding new edited obj in the temp with the filtered 
    setTodo([...filtertodo,Updatetask]);
    setUpdatetask(""); //to clear the field after updating 
  }


  return (
    <div className="Container App" style={{margin:"0px 0px 0px 350px"}}>

      <br/>   <br/>
       <h2>To-Do</h2>
      <br/>   <br/>

      {Updatetask ? (
       <UpdateForm modifytask={modifytask} Updatetask={Updatetask} updatetask={updatetask} cancelupdate={cancelupdate}/>
      ) : (
        <AddTaskForm Newtask={Newtask} setNewtask={setNewtask} addtask={addtask}/>
      )}
      <br></br>

      { toDo.length ? <h4>It's not too late to become today's champion</h4>: <h4>No Tasks Found</h4>}
      <br/>  
     
      <Todos toDo={toDo} completedtask={completedtask} setUpdatetask={setUpdatetask} deltask={deltask} />

    </div>
  );
}

export default App;
