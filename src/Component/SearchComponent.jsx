import style from './nav.module.css'
import React from 'react';

const SearchComponent = ({ handleSearch,searchbutton }) => {
  return (
    <div>
    <div id={style.list}>
      <label htmlFor="">Search Universities by Country------------------</label>
      <input
        type="text"
        placeholder="Enter country name"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button onClick={searchbutton}>Search</button>
    </div>
    </div>
  );
};

export default SearchComponent;
