import React, { useEffect, useState } from 'react'
import Navbar from '../other/Navbar'
import SCpanel from './SCpanel'
import TaskPanel from './TaskPanel'
import CreateTask from '../CreateTask'

export const setLocalStorage = (task) => {
    localStorage.setItem('task', JSON.stringify(task));
  }

const Dashboard = () => {

    const getLocalStorage = () => {
      const task = JSON.parse(localStorage.getItem('task'));
      return { task };
    }

    const [task, setTask] = useState(() => {
      const stored = getLocalStorage(); 
      return stored.task ? stored.task : [];
    });

    const [create, setCreate] = useState(false);
    const [isSearch, setisSearch] = useState(false);
    const [term, setTerm] = useState("")

    const markAsComplete = (id) => {
      const updatedTasks = task.map((t,idx) => {
        if (idx === id) {
          return { ...t, completed: true };
        }
        return t;
      });
      setTask(updatedTasks);
    };

    const markAsDeleted=(id)=>{
      const updatedTasks = task.filter((t,idx) => idx !== id);
      setTask(updatedTasks);
    }

    useEffect(() => {
      setLocalStorage(task);
    }, [task]);

    const filteredTasks = isSearch ? task.filter((t) =>
      t.taskTitle.toLowerCase().includes(term.toLowerCase())
    ) : task;
    
  return (
    <div className='relative font-mono z-20 text-white grid grid-rows-[auto_1fr] h-screen'>
      <Navbar />
      {create ? (
        <div className='flex justify-center items-center h-full'>
          <CreateTask setTask={setTask} setCreate={setCreate} />
        </div>
      ) : (
        <div className="grid grid-rows-[auto_1fr]">
          <SCpanel term={term} setisSearch={setisSearch} setCreate={setCreate} setTerm={setTerm} />
          <TaskPanel 
          task={filteredTasks} 
          markAsComplete={markAsComplete} 
          markAsDeleted={markAsDeleted} />
        </div>
      )}
    </div>
  );
}

export default Dashboard