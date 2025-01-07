"use client"

import React, { useEffect, useState } from 'react';
import searchIcon from '../../public/searchIcon.png';
import Image from 'next/image';

const SearchFilter = ({handleSearchChange, handleFilterChange} : {handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void})  => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect( () => {
    const preferredDarkMode = localStorage.getItem('darkMode');
    if(preferredDarkMode !== null) {
      setIsDarkMode(JSON.parse(preferredDarkMode))
    }
  }, [])


  return (
    <div className='flex justify-between'>
        <div className={`flex items-center w-[30%] ${isDarkMode ? "bg-darkModeDb text-white" : "bg-white" }  gap-3 py-3 shadow-lg rounded-lg px-8`}>
            <span>
              <Image className='bg-transparent' src={searchIcon} width={28} alt='search_icon' />
            </span>
            <input className='border-none bg-transparent outline-none' onChange={handleSearchChange}  placeholder='Search for a country...' />
        </div>
        <div className={`flex w-[12%] items-center gap-3 py-3 ${isDarkMode ? "bg-darkModeDb text-white" : "bg-white" } shadow-lg rounded-lg px-3 `}>
            <select onChange={handleFilterChange} defaultValue={""} className={`w-full ${isDarkMode ? "bg-darkModeDb text-white" : "bg-white"} border-none outline-none px-5`}>
              <option value={""}>Filter by region</option>
              <option value={"africa"}>Africa</option>
              <option value={"america"}>America</option>
              <option value={"asia"}>Asia</option>
              <option value={"europe"}>Europe</option>
              <option value={"oceania"}>Oceania</option>
            </select>
        </div>
    </div>
  )
}

export default SearchFilter