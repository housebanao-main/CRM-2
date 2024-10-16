import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import styles from './Details.module.css'; 

const Details = ({ lead }) => { // Expect the lead object as a prop
  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate('/Detail', { state: { lead } }); // Pass lead object when navigating
  };

  const items = [
    { name: "Details", path: "/Detail" },
    { name: "BOQ", path: "/Boq" },
    { name: "Team", path: "/team" },
    { name: "Site Inspection", path: "/Site-inspection" }
  ];

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.detailItem} onClick={handleNavigateToDetail}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
