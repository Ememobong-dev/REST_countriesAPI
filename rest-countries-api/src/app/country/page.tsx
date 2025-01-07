
"use client";

import Image from "next/image";
import countryData from "../data.json"
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CountryPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const searchParam = useSearchParams();
  const router = useRouter();

  const countryName = searchParam.get('countryName');

  // Ensure countryName is a string
  const countryNameString = countryName ? countryName.toLowerCase() : "";

  const country = countryData.find( (country) => country.name.toLowerCase() === countryNameString)

  const handleGoBack = () => {
    router.back()
  }

  useEffect( () =>{
   const preferredMode = localStorage.getItem('darkMode');
   if(preferredMode !== null) {
     setIsDarkMode(JSON.parse(preferredMode))
   }
  }, [isDarkMode] )

  return (
    <div className="px-14 w-full my-32">
      <div>
        <button onClick={handleGoBack} className={` ${isDarkMode ? "bg-darkModeDb" : "bg-darkLightMode"} rounded-lg text-lightModeInput shadow-lg font-bold py-2 px-8 text-sm`} >Back</button>
      </div>
      <div className=" mt-20 flex items-center">
        <div className="w-1/2">
          <span className=" h-[150px]">
           <Image 
           src={country?.flag || ""} 
           alt="countryFlag" 
           width={700}
           height={500}
           objectFit="cover"
           />
          </span>
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold my-5" > {country?.name} </h2>
          <div className="flex gap-36">
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-[15px]">Native Name: <span className="font-normal text-lightModeInput"> {country?.nativeName} </span></p>
              <p className="font-bold text-[15px]">Population: <span className="font-normal text-lightModeInput"> {country?.population} </span> </p>
              <p className="font-bold text-[15px]">Region: <span className="font-normal text-lightModeInput"> {country?.region}</span> </p>
              <p className="font-bold text-[15px]">Sub Region: <span className="font-normal text-lightModeInput"> {country?.subregion}</span>  </p>
              <p className="font-bold text-[15px]">Capital: <span className="font-normal text-lightModeInput"> {country?.capital}</span> </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-[15px]">Top Level Domain: <span className="font-normal text-lightModeInput"> {country?.topLevelDomain[0]} </span></p>
              <p className="font-bold text-[15px]">Currencies: <span className="font-normal text-lightModeInput"> {country?.currencies?.map( (currency) => currency.name )} </span> </p>
              <p className="font-bold text-[15px]">Language: <span className="font-normal text-lightModeInput"> {country?.languages?.map( (lang) => lang.name )}</span> </p>
            </div>
          </div>
          <div className="mt-20 flex items-center gap-2">
            <p>Border Countries: </p>
            <div className="flex flex-wrap gap-5">
              { country?.borders ?
                            country?.borders?.map( (border, index) => {
                              return (
                                <span key={index} className={` ${isDarkMode ? "bg-darkModeDb" : "bg-darkLightMode"} rounded-lg text-lightModeInput shadow-lg font-bold py-2 px-8 text-sm`} > {border} </span>
                              )
                            }) :
                "No Border Countries"
              }
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
