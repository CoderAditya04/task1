import React from 'react';
import './Bar.scss'; 

const Bar = ({ label, height }) => {
  const barStyle = {
    height: `${height} px`,
  };

  return (
    <div className='bar'>
      <div className='bar-label'>'₹ '+{height}</div>
      <div className='bar-inner' style={barStyle}></div>
      <div className='bar-label'>{label}</div>
    </div>
  );
};

export default Bar;