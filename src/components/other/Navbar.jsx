import React from 'react'
import todolist from '../../assets/todolist.svg'


const Navbar = () => {
  return (
    <nav className='flex justify-center items-center p-5 gap-5 lg:gap-10 w-full relative z-20 h-auto'>
        <img src={todolist} alt="icon" 
        className='size-16 lg:size-20'/>
        <h1 className='text-4xl lg:text-5xl font-extrabold'>Talika</h1>
    </nav>
  )
}

export default Navbar