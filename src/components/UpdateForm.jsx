import React from 'react'
import { useEffect,useRef } from 'react';

function UpdateForm( {modifytask,Updatetask,updatetask,cancelupdate} ) {

    var rf1 = useRef(); 

    useEffect(()=>{
        rf1.current.focus()
    },[])

  return (
    <>
        {/* Update task input */}
      <div className='row'>
        <div className='col'>
          <input className='form-control form-control-lg' value={Updatetask.title}
          onChange={(e)=>{modifytask(e)}}  ref={rf1}/>

        </div>
        <div className='col-auto'>
          <button className='btn btn-lg btn-success mr-20'
          onClick={updatetask}>
            Update
          </button>&nbsp;&nbsp;&nbsp;
          <button className='btn btn-lg btn-warning' onClick={cancelupdate}>
            Cancel
          </button>
        </div>
      </div>

      <br/> 
        </>
  )
}

export default UpdateForm