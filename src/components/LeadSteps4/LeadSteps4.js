import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
import styles from './LeadSteps4.module.css';

import checkboxIcon from '../../assets/checkbox-1.png'; 
import personicon from '../../assets/person-1.png'; 

const LeadSteps = ({ lead = {} }) => {
  // Provide default values to prevent errors when lead or its properties are undefined
  const {
    email = 'N/A',
    phone = 'N/A',
    plotSize = 'N/A',
    floors = 'N/A',
    rooms = 'N/A',
    budget = 'N/A',
    startDate = 'N/A',
    city = 'N/A',
    pocDetails = 'N/A',
    type = 'N/A'
  } = lead;

  const [tasks, setTasks] = useState([
    {
      title: "Send Quotation",
      description: "Make changes in BOQ, as per customer’s need",
      overdue: "1 day overdue",
      date: "June 21",
    },
    {
      title: "Meeting with the customer",
      description: "Regarding budget and updated BOQ.",
      upcoming: "3 days to go",
      date: "June 24",
    },
  ]);

  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [showOlder, setShowOlder] = useState(false);

  const handleAddTask = () => {
    const newTask = {
      title: "New Task",
      description: newTaskDescription,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, newTask]);
    setNewTaskDescription(""); // Clear the input field after adding the task
  };

  const handleShowOlderTasks = () => {
    setShowOlder(!showOlder);
  };

  return (
    <div className={styles.container}>
      {/* Left Column: First Box and Second Box */}
      <div className={styles.leftColumn}>
        {/* Activity Section */}
        <div className={styles.activitySection}>
          <div className={styles.header}>
            <h1 className={styles.activityTitle}>Activity</h1>
          </div>
          <hr className={styles.separator} />

          {/* Log a Call and New Task */}
          <div className={styles.tableWrapper}>
            <div className={styles.tableHeader}>
              <div className={styles.tableColumn}>Log a Call</div>
              <div className={styles.tableColumn}>New Task</div>
            </div>
            <div className={styles.tableBody}>
              <div className={styles.tableRow}>
                <div className={styles.tableColumn}>
                  <input
                    type="text"
                    placeholder="Recap your call"
                    className={`${styles.inputField} ${styles.highlight}`}
                  />
                </div>
                <div className={styles.tableColumn}>
                  <input
                    type="text"
                    placeholder="Enter new task"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}  
                    className={styles.inputField}
                  />
                </div>
                <div className={styles.tableColumn}>
                  <button className={styles.addButton} onClick={handleAddTask}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Details Section */}
        <div className={styles.keyDetailsSection}>
          <h3 className={styles.detailsHeader}>Key Details</h3>
          <hr className={styles.separator} />
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <p>Email</p>
              <p>Phone Number</p>
              <p>Plot Size</p>
              <p>Floor Requirement</p>
              <p>Room Requirement</p>
              <p>Budget</p>
              <p>Start Date</p>
              <p>Location</p>
            </div>
            <div className={styles.detailItem}>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{plotSize}</p>
              <p>{floors}</p>
              <p>{rooms}</p>
              <p>{budget}</p>
              <p>{startDate}</p>
              <p>{city}</p>
            </div>
          </div>
        </div>

        {/* Task Section */}
        <div className={styles.taskSection}>
          <div className={styles.taskHeader}>
            <h1 className={styles.taskTitle}>Tasks</h1>
          </div>
          <hr className={styles.separator} />
          <div className={styles.nextStepsHeader}>
            <span className={styles.nextStepsTitle}>Next Steps</span>
            <hr className={styles.lineRight} />
            <span className={styles.markAsDone}>Mark as Done</span>
          </div>

          {tasks.map((task, index) => (
            <div key={index} className={styles.taskItem}>
              <div className={styles.taskLeft}>
                <h4 className={styles.taskMainHeading}>{task.title}</h4>
                <p className={styles.taskSubHeading}>{task.description}</p>
                {task.overdue && <p className={styles.taskSubHeadingOverdue}>{task.overdue}</p>}
                {task.upcoming && <p className={styles.taskSubHeadingUpcoming}>{task.upcoming}</p>}
              </div>
              <div className={styles.taskRight}>
                <p className={styles.taskDate}>{task.date}</p>
                <input type="checkbox" className={styles.taskCheckbox} />
              </div>
            </div>
          ))}

          {/* Show Older Tasks */}
          <div className={styles.pastActivitiesHeader} onClick={handleShowOlderTasks}>
            <span className={styles.pastActivitiesTitle}>Past Activities</span>
            <hr className={styles.lineRight} />
          </div>
          {showOlder && (
            <div>
              <p>Older tasks go here...</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Additional Info and Timeline Section */}
      <div className={styles.rightColumn}>
        {/* Additional Info */}
        <div className={styles.additionalInfoSection}>
          <div className={styles.header}>
            <h1 className={styles.additionalInfoTitle}>Details</h1>
            <h3 className={styles.editOption}>Edit</h3>
          </div>
          <hr className={styles.separator} />
          <div className={styles.infoColumns}>
            <div className={styles.infoColumn}>
              <div className={styles.infoItem}>
                <h4>POC Details</h4>
                <p>{pocDetails}</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Location</h4>
                <p>{city}</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Plot Size</h4>
                <p>{plotSize}</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Budget</h4>
                <p>{budget}</p>
              </div>
            </div>
            <div className={styles.infoColumn}>
              <div className={styles.infoItem}>
                <h4>Type</h4>
                <p>{type}</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Floor Requirement</h4>
                <p>{floors}</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Room Requirement</h4>
                <p>{rooms}</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Start Date</h4>
                <p>{startDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={styles.timelineSection}>
          <h1 className={styles.timelineTitle}>Activity Timeline</h1>
          <hr className={styles.separator} />
          <div className={styles.timelineStepContainer}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon} />
              <img src={checkboxIcon} alt="Step Icon" className={styles.stepIcon} />
              <div className={styles.line}></div>
            </div>
            <div className={styles.stepDetails}>
              <div className={styles.stepHeader}>
                <h4 className={styles.stepTitle}>Updated new Task</h4>
                <p className={styles.stepTimestamp}>1 day ago</p>
              </div>
              <div className={styles.personInfo}>
                <img className={styles.personImage} src={personicon} alt="Neetu" />
                <p className={styles.personName}>Neetu</p>
              </div>
            </div>
          </div>
          <h1 className={styles.show} onClick={handleShowOlderTasks}>Show older</h1>
        </div>
      </div>
    </div>
  );
};

export default LeadSteps;
