import React, { useState } from 'react';
import Tab from '../tab/tab';

const Container = () => {
  const [currentTab, setCurrentTab] = useState('6 Months');

  const handleTabChange = (newTab) => {
    setCurrentTab(newTab);
  };

  const tabs = ['6 Months', '1 Year', '3 Year'];

  return (
    <div>
      <Tab tabs={tabs} value={currentTab} handleChange={handleTabChange} />
    </div>
  );
};

export default Container;
