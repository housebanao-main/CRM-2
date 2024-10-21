import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styles from './Details.module.css'; 

const Details = ({ lead }) => { // Expect the lead object as a prop
  const navigate = useNavigate();

  // Update the function to take a dynamic path
  const handleNavigate = (path) => {
    navigate(path, { state: { lead } }); // Pass lead object when navigating
  };

  const items = [
    { name: "Details", path: "/Detail" },
    { name: "BOQ", path: "/Boq" },
    { name: "Team", path: "/Team" },
    { name: "Site Inspection", path: "/siteinspection" }
  ];

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.detailItem} onClick={() => handleNavigate(item.path)}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
