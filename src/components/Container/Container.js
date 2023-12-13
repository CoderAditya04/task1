import React, { useState } from 'react';
import Bar from '../Bar/Bar.js';
import Tab from '../Tab/Tab.js'
import styles from './Container.module.scss'

const Container = () => {
  const [currentTab, setCurrentTab] = useState('6 Months');

  const handleTabChange = (e) => {
    setCurrentTab(e.target.getAttribute('value'));
  };
 
  const barParams = [
    {
      label: "Jan",
      value: 100
    },
    {
      label: "Feb",
      value: 0
    },
    {
      label: "Mar",
      value: 200
    },
    {
      label: "Apr",
      value: 500
    },
    {
      label: "May",
      value: 300
    },
    {
      label: "Jun",
      value: 600
    },
  ]

  const tabs = ['6 Months', '1 Year', '3 Year'];

  return (
    <div className={styles.boxChart}>
      <div className={styles.barChart}>
      {barParams.map((barData) => (
        <Bar key={barData.label} label={barData.label} value={barData.value} />
      ))}
      </div>
      <Tab tabs={tabs} value={currentTab} handleChange={handleTabChange} />
    </div>
  );
};

export default Container;
