import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Hello react</div>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
