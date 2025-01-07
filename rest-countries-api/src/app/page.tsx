"use client";

import SearchFilter from "@/components/SearchFilter";
import countryData from "@/app/data.json"
import Card from "@/components/Card";
import React, {useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredInput, setFilteredInput] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setSearchInput(e.target.value)
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilteredInput(e.target.value);
  }


   const filteredList = countryData.filter((country) => {
    const queryInput = searchInput.toLowerCase();
    const filterRegion = filteredInput.toLowerCase();

    // If no filter or search, return all countries
    if (searchInput === "" && filteredInput === "") return true;

    // Check if search matches or region matches
    const matchesSearch = country.name.toLowerCase().includes(queryInput);
    const matchesFilter = filteredInput === "" || country.region.toLowerCase() === filterRegion;

    return matchesSearch && matchesFilter; 
  });





  return (
    <div>
      <div className="px-20 my-32">
        <SearchFilter handleSearchChange={handleSearchChange} handleFilterChange={handleFilterChange} />

        <div className="flex flex-wrap items-center mt-20 gap-14">
          {
            filteredList.map( (country) => {
              return (
                <Card key={country.name} countryCapital={country.capital || ""} countryFlag={country.flag} countryName={country.name} countryPop={country.population} countryRegion={country.region}  />
              )
            } )

          }
          
        </div>
      </div>
      
    </div>
  );
}
