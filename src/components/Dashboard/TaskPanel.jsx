import React from 'react'
import Task from '../other/Task'

const TaskPanel = ({ task, markAsComplete,markAsDeleted }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 relative z-30'>
        {task.length === 0 ? ""
        :
        task.map((elem,idx)=>{
            if(elem.taskTitle!="" && elem.taskDescription!=""){return <Task task={task} elem={elem} key={idx} id={idx} markAsComplete={markAsComplete} markAsDeleted={markAsDeleted} />}
        })
        }
    </div>
  )
}

export default TaskPanel