import React from 'react';
import styles from './DisplayTable.module.css'; // Update to use the correct CSS module

const DisplayTable = ({ answers }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Description</th>
            <th>UOM</th>
            <th>Standard (FT)</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((answer, index) => (
            <tr key={index}>
              <td>{answer?.question || 'N/A'}</td>
              <td>{answer?.uom || 'N/A'}</td>
              <td>{answer?.ft || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
