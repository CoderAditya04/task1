import React from 'react';
import styles from './Tab.module.scss'

const Tab = ({ tabs, value, handleChange }) => {

  return (
    <div className={styles.tab}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          value={tab}
          className={`${styles.tabItem} ${tab === value ? styles.active : ''}`}
          onClick={handleChange}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tab;
