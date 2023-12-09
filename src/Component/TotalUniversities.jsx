import React from 'react';
import style from './nav.module.css'

const TotalUniversities = ({ total }) => {
  return (
    <div>
    <div className={style.ak}>
      <h2>Total Universities</h2>
      <input type="text" value={total} />
    </div>
    </div>
  );
};

export default TotalUniversities;
