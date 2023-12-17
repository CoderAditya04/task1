import React from 'react';
import Bar from './Bar/index'
import styles from './index.module.scss'

const BarChart = ({values, title}) => {

  if(!values) return null;
  
  return (
    <div>
      <div className={styles.titleText}>{title}</div>
      <div className={styles.barChart}>
      {values.map((barData) => (
        <Bar key={barData.label} label={barData.label} value={barData.value} />
      ))}
      </div>
    </div>
  );
};

export default BarChart;
