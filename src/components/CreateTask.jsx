import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

const CreateTask = ({ setTask, setCreate }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")

    const handleTask=(e)=>{

        e.preventDefault();

        if(title==="" && desc===""){ 
            alert("Entry a Task first")
            return;
        }
        const newTask={
            taskTitle:title,
            taskDescription:desc,
            completed: false 
        }
        setTask(prevTask=>([
            ...prevTask,
            newTask]));
        setCreate(false);
    }

    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }

    const handleDesc=(e)=>{
        setDesc(e.target.value)
    }

    const handleBack=()=>{
        setCreate(false);
    }

  return (
    <div className='p-4 w-full flex flex-col items-center gap-6 relative z-20'>
        <h1 className='w-full md:w-3/4 lg:w-2/5 flex justify-center items-center space-x-4'>
            <button 
            className='p-0 h-15 w-17 cursor-pointer bg-gray-800 rounded-full flex justify-center items-center hover:bg-rose-700 transition-all duration-500'
            onClick={(e)=>handleBack(e)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <span className='text-center w-full text-2xl md:text-3xl font-extrabold'>Create a Task</span>
        </h1>
        <form 
        className='p-4 md:p-8 border-4 rounded-xl border-rose-800 bg-gray-900 w-full md:w-3/4 lg:w-2/5 flex flex-col justify-center gap-4 md:gap-8 text-lg md:text-xl'
        onSubmit={handleTask}>
            <label className='flex justify-center gap-4 flex-col'>
                <p>
                    Enter The Task Title:
                </p>
                <input 
                type="text" 
                name="" id="" 
                className='w-full p-4 border-2 rounded-2xl focus:outline-none' placeholder="Enter The Title..."
                value={title}
                onChange={(e)=>{handleTitle(e)}}/>
            </label>
            <label className='flex justify-center gap-4 flex-col'>
                <p>
                    Enter The Task Description:
                </p>
                <textarea 
                name="" id="" 
                className='w-full h-50 p-4 border-2 rounded-2xl focus:outline-none' 
                placeholder="Enter The Description..."
                value={desc}
                onChange={(e)=>{handleDesc(e)}}></textarea>
            </label>
            <button
            type='submit' 
            className='bg-gray-950 w-max self-center rounded-2xl cursor-pointer px-6 py-3 md:px-8 md:py-4 hover:bg-rose-700 transition-all duration-500 hover:scale-105 flex items-center gap-2'
            >
            <FontAwesomeIcon icon={faPlus} />
            Submit Task
            </button>
        </form>
    </div>
  )
}

export default CreateTask