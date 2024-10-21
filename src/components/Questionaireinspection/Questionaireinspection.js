import React, { useState } from 'react';
import styles from './Questionaireinspection.module.css'; // CSS for Questionnaire

const QuestionaireInspection = ({ createdBy, date, onSave }) => {
  const [answers, setAnswers] = useState([]); // State to hold the selected answers

  const questions = [
    "Offsets provided by left, right, and back neighbours?",
    "Electric Pole/Transformer location near to site?",
    "Existing infrastructure on site which needs to be demolished?",
    "At least 64 sqft area available for labour shed?",
    "Is labour allowed to stay at the site?",
    "10% of site area for storage of materials?",
    "Is there any rocky terrain present on the site, shared with neighbouring building?",
    "Is Site contour provided?",
    "Is there any rocky terrain present on site?",
    "Is there any slope in the plot?",
    "Difference in level of the site with respect to the centre of the road?",
    "Road traffic conditions at the plot?",
    "What is the road width in front of the plot (excluding footpath)?",
    "If Yes, is the storage area available near the site?",
    "Water table high?",
    "Drainage Line marking and information provided?",
  ];

  const handleChange = (index, uom, ft) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = { question: questions[index], uom, ft };
    setAnswers(updatedAnswers);
  };

  const handleSave = () => {
    onSave(answers); // Pass answers back to parent component to show table
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionGrid}>
        {questions.map((question, index) => (
          <div key={index} className={styles.questionItem}>
            <label>{question}</label>
            <div className={styles.inputs}>
              <select
                className={styles.input}
                onChange={(e) => handleChange(index, e.target.value, answers[index]?.ft)}
              >
                <option value="">UOM</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <select
                className={styles.input}
                onChange={(e) => handleChange(index, answers[index]?.uom, e.target.value)}
              >
                <option value="">FT</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        ))}
        <button className={styles.saveButton} onClick={handleSave}>
        Save
      </button>
      </div>
      {/* Save button at the bottom */}
      
    </div>
  );
};

export default QuestionaireInspection;
