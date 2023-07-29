import React from 'react'
import { useEffect,useRef } from 'react';

function AddTaskForm( {Newtask,setNewtask,addtask } ) {

    var rf1 = useRef(); 

    useEffect(()=>{
        rf1.current.focus()
    },[])

    return (
    <>
         {/* Add Task input */}
      <div className='row'>
        <div className='col'>
          <input className='form-control form-control-lg' value={Newtask} onChange={(e)=>setNewtask(e.target.value)}  ref={rf1}/>

        </div>
        <div className='col-auto'>
          <button className='btn btn-lg btn-success' onClick={addtask}>
            Add Task
          </button>
        </div>
      </div>
        </>
  )
}

export default AddTaskForm