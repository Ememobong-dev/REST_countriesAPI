"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


interface countryCardDetailsProps {
    countryFlag: string, 
    countryName: string,
    countryPop: number, 
    countryRegion: string, 
    countryCapital: string
    
}

const Card: React.FC<countryCardDetailsProps>  = ({countryFlag, countryName, countryPop, countryRegion, countryCapital}) => {
   const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect( () => {
        const preferredDrkMode = localStorage.getItem('darkMode');
        if(preferredDrkMode !== null) {
            setIsDarkMode(JSON.parse(preferredDrkMode))
        }
        
    }, [isDarkMode])

    const openSinglePage = () => {
    
    }
  
  
    return (
    <div onClick={openSinglePage} className={`w-[300px] cursor-pointer ${isDarkMode ? "bg-darkModeDb " : "bg-transparent"} shadow-xl mb-10 h-[350px]`}>
        <Link href={`/country?countryName=${countryName}`}>
            <div className="relative w-full h-[150px]">
                <Image 
                    src={countryFlag} 
                    alt="country image" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>
            <div className={`p-4 bg-transparent ${isDarkMode ? "text-white " : "text-black"} `}>
                <p className='my-4 font-bold' > {countryName} </p>
                <div className='flex flex-col gap-1'>
                    <p className='text-[15px] font-medium'>Population : <span className={ `${isDarkMode ? "text-darkLightMode" : "text-lightModeInput"} font-normal`}>{countryPop}</span> </p>
                    <p className='text-[15px] font-medium'>Region : <span className={ `${isDarkMode ? "text-darkLightMode" : "text-lightModeInput"} font-normal`}>{countryRegion} </span> </p>
                    <p className='text-[15px] font-medium'>Capital : <span className={ `${isDarkMode ? "text-darkLightMode" : "text-lightModeInput"} font-normal`}>{countryCapital} </span> </p>

                </div>
            </div>
        </Link>
      
    </div>
  )
}

export default Card