import React from 'react';
import style from './nav.module.css'
const UniversityList = ({ universities }) => {
  return (
    <div>
    <div className={style.ul} >
      <h2>List of Universities</h2>
      <ul>
        {universities.map((university) => (
          <p key={university.id}>
            * {university.name} - {university.country}
          </p>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default UniversityList;
