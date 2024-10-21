import React, { useState } from 'react';
import styles from './Siteheader.module.css'; // Import CSS module
import Questionaireinspection from '../Questionaireinspection/Questionaireinspection';
import DisplayTable from '../Display/DisplayTable';

const SiteHeader = () => {
  const [showForm, setShowForm] = useState(false); // Control form visibility
  const [showQuestionnaire, setShowQuestionnaire] = useState(false); // Control questionnaire visibility
  const [showTable, setShowTable] = useState(false); // Control table visibility
  const [formData, setFormData] = useState({ name: '', date: '' });
  const [createdBy, setCreatedBy] = useState(''); // Initially empty
  const [answers, setAnswers] = useState([]); // Store the answers

  // Get today's date
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm); // Show form when button is clicked
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCreatedBy(formData.name); // Set "Created By" from the form input
    setShowForm(false); // Hide the form
    setShowQuestionnaire(true); // Show the questionnaire component
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle saving the answers from the questionnaire
  const handleSaveAnswers = (submittedAnswers) => {
    setAnswers(submittedAnswers); // Save the answers
    setShowQuestionnaire(false); // Hide the questionnaire
    setShowTable(true); // Show the table
  };

  return (
    <div>
      {/* Static Header */}
      <div className={styles.siteWrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.leftInfo}>
            <div className={styles.infoRow}>
              <div className={styles.infoBlock}>
                <h3>Today's Date</h3>
                <p>{today}</p>
              </div>
              <div className={styles.infoBlock}>
                <h3>Created By</h3>
                <p>{createdBy || ' '}</p> 
              </div>
            </div>
          </div>
          <div className={styles.rightButtonContainer}>
            {!showQuestionnaire && !showTable && ( 
              <button className={styles.button} onClick={toggleForm}>
                Site Inspection
              </button>
            )}
          </div>
        </div>
      </div>
      {showForm && (
        <div className={styles.formOverlay}>
          <div className={styles.formContainer}>
            <h2 className={styles.heading}>Site Inspection</h2>
            <form className={styles.form} onSubmit={handleFormSubmit}>
              <div className={styles.inputBlock}>
                <label htmlFor="name">Created By</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="date">Filled on</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </div>
              <button type="submit" className={styles.nextButton}>
                Next
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Show Questionnaire below SiteHeader after form submission */}
      {showQuestionnaire && (
        <Questionaireinspection
          createdBy={createdBy}
          date={formData.date}
          onSave={handleSaveAnswers} // Pass the save function here
        />
      )}

      {/* Show the table after the questionnaire is completed */}
      {showTable && <DisplayTable answers={answers} />}
    </div>
  );
};

export default SiteHeader;
