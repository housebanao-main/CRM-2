import React from 'react';
import styles from './Headerdescription.module.css';  
import { FaArrowLeft } from 'react-icons/fa';  
import logo from '../../assets/Logo-Vive.png'; // Ensure the correct path

const Headerdescription = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <button className={styles.button}>Edit</button>
      </div>

      <div className={styles.back}>
        <FaArrowLeft className={styles.arrowIcon} />  
        <h1 className={styles.heading}>Lead</h1>
      </div>
    </>
  );
};

export default Headerdescription;
