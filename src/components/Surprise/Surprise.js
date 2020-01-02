import React from 'react';
import styles from './Surprise.scss';

class Surprise extends React.Component {
  render() {
    return (
        <div className={styles.content}>
          <h1 className={styles.title}>
            Happy Birthday :)
          </h1>
        </div>
    )
  }
}

export default Surprise;
