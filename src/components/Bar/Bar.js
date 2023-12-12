import React from 'react';
import styles from './Bar.module.scss' 
import classNames from 'classnames';

const Bar = ({ label, value }) => {

  const classes = classNames(`${styles.barInner}`, {
    [styles.zeroClass] : value === 0,
    [styles.nonZeroClass] : value !== 0
  });

  return (
    <div className={styles.bar}>
      <div className={styles.barLabel}>{` ₹${value}`}</div>
      <div className={classes} style={{height: `${value*0.3+5}px`}}></div>
      <div className={styles.barLabel}>{label}</div>
    </div>
  );
};

export default Bar;