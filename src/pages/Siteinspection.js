import React from 'react';
import { useLocation } from 'react-router-dom';
import Siteheader from '../components/Siteheader/Siteheader';
import Headerdescription from '../components/Headerdescription/Headerdescription';
import Details from '../components/Details/Details';
import styles from './Siteinspection.module.css';
import QuestionaireInspection from '../components/Questionaireinspection/Questionaireinspection';

const Siteinspection = () => {
  const location = useLocation();
  const { createdBy } = location.state || { createdBy: 'Admin' }; // Fallback to 'Admin' if no state is passed

  return (
    <div className={styles.container}>
      <Headerdescription className={styles.headerContainer} />
      <Details className={styles.detailsContainer} />

      {/* Pass the createdBy and date dynamically */}
      <Siteheader />
      
    </div>
  );
};

export default Siteinspection;
