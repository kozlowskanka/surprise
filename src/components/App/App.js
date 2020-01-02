import React from 'react';
import styles from './App.scss';
import Surprise from '../Surprise/Surprise';

class App extends React.Component {
  render() {
    return (
      <main className={styles.container}>
        <Surprise />
      </main>
    )
  }
}

export default App;
