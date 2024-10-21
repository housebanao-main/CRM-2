import React, { useState } from 'react';
import Headerdescription from '../components/Headerdescription/Headerdescription';
import Details from '../components/Details/Details';
import Teamheader from '../components/Teamheader/Teamheader';
import TeamTable from '../components/TeamTable/TeamTable';
import styles from './Team.module.css'; // Import the CSS module

const Team = () => {
  const [tasks, setTasks] = useState([]); // State to hold the tasks

  // Function to add new tasks from Teamheader
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={styles.container}>
      <Headerdescription className={styles.headerContainer} />
      <Details className={styles.detailsContainer}/>
      
      {/* Pass addTask function to Teamheader */}
      <Teamheader className={styles.teamHeader} addTask={addTask} />
      
      {/* Pass tasks to TeamTable */}
      <TeamTable className={styles.teamTable} tasks={tasks} />
    </div>
  );
};

export default Team;
