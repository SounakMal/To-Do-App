import React from 'react'
import Input from './Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

const SCpanel = ({ term,setCreate,setTerm,setisSearch}) => {

    const handleCreate=()=>{
        setCreate(true);
    }

    const handleSearch=()=>{
      setisSearch(true);
    }

  return (
    <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-5 p-4 relative z-30 text-xl">
        <Input setTerm={setTerm} term={term} />
        <button 
        className='cursor-pointer rounded-2xl bg-rose-800 text-stone-200 p-2 lg:p-4 border-2 lg:border-4 border-rose-700 text-base lg:text-xl transition-all duration-300 hover:bg-rose-700 hover:scale-105'
        onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
        <button
        className='cursor-pointer rounded-2xl bg-rose-800 text-stone-200 p-2 lg:p-4 border-2 lg:border-4 border-rose-700 text-base lg:text-xl transition-all duration-300 hover:bg-rose-700 hover:scale-105 flex items-center gap-2'
        onClick={handleCreate}>
        <FontAwesomeIcon icon={faPlus} />
        Create Task</button>
    </div>
  )
}

export default SCpanel