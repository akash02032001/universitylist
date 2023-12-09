import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Component/nav.module.css'
import UniversityList from './Component/UniversityList';
import SearchComponent from './Component/SearchComponent';
import TotalUniversities from './Component/TotalUniversities';
import ButtonsComponent from './Component/ButtonsComponent';
import calculateTotalByCountry from './Component/calculateTotalByCountry';

const App = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalUniversities, setTotalUniversities] = useState(0);
  const [universitiesByCountry, setUniversitiesByCountry] = useState({});
  const [s, setS] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://universities.hipolabs.com/search?name=');
        setUniversities(response.data);
        setFilteredUniversities(response.data);
        console.log(searchTerm);

        const countByCountry = calculateTotalByCountry(response.data);
        setUniversitiesByCountry(countByCountry);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = universities.filter((university) =>
      university.country.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUniversities(filtered);
  };


  const handleHighest = () => {
    const highestCountries = Object.keys(universitiesByCountry).sort(
      (a,b) => universitiesByCountry[b] - universitiesByCountry[a]
    );
    setS(`According to our list ${highestCountries[0]} has the higest number of universities`);
  };

  const handleLowest = () => {
    const lowestCountries = Object.keys(universitiesByCountry).sort(
      (a,b) => universitiesByCountry[a] - universitiesByCountry[b]
    );
    setS(`According to our list ${lowestCountries[0]} has the lowest number of universities`);
  };

  useEffect(() => {
    setTotalUniversities(filteredUniversities.length);
  }, [filteredUniversities]);

  let searchbutton=()=>{
    return handleSearch
  }

  return (
    <div className={style.main}>
      <div className={style.left}>
        <SearchComponent handleSearch={handleSearch} searchbutton={searchbutton} />
        <TotalUniversities total={totalUniversities} />
      </div>
      <div className={style.down}>
      <div className={style.alg} >
         <ButtonsComponent handleHighest={handleHighest} handleLowest={handleLowest} /> 
         <marquee>{s}</marquee>   
         <UniversityList universities={filteredUniversities} />
        </div>
      </div>
      

    </div>
  );
};

export default App;

