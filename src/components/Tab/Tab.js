import React from 'react';

const Tab = ({ tabs, value, handleChange }) => {
  return (
    <div className='tab-container'>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab-item ${tab === value ? 'active' : ''}`}
          onClick={() => handleChange(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tab;
