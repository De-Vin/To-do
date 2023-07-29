import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'

function Todos( {toDo,completedtask,setUpdatetask,deltask} ) {
  return (
   <>
   {toDo.map((task,index)=>{
        return (
          <React.Fragment key={task.id} >
            <div className='taskbg'>

              <div className={task.status ? "done" : ""}> {/* If task is marked as done applying css styling to the task else no */}
                <span className='tasknumber'>{index+1}</span>
                <span className='taskText'>{task.title}</span>
              </div>
              <div className='wrapicons'>
                <span title='Completed'onClick={()=>completedtask(task.id)}>
                  <FontAwesomeIcon  icon={faCircleCheck}/>
                </span>

                {task.status?null:(<span title='Edit'
                  onClick={()=> setUpdatetask({  //we need to take the task as whole obj
                    id: task.id,
                    title: task.title,
                    status: task.status ? true: false
                  })}
                > 
                  <FontAwesomeIcon  icon={faPen}/>
               </span>) }   {/* if task status done don't show edit icon */}

                <span title='Delete' onClick={()=>deltask(task.id)}> {/*  as we're mapping obj we can get the id, so we send it as a parameter  */}
                  <FontAwesomeIcon  icon={faTrashCan}/>
                </span>
              </div>

            </div>

          </React.Fragment>
        )
      })}
   </>
  )
}

export default Todos