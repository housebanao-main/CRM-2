import React from 'react';
import styles from './TeamTable.module.css'; // Import CSS module

const TeamTable = ({ tasks, className }) => {
  return (
    <div className={`${styles.teamTable} ${className}`}> {/* Combine styles */}
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Assignee</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.taskName}</td>
              <td>{task.assignee}</td>
              <td>{task.priority}</td>
              <td>{task.dueDate}</td>
              <td>{task.status || 'Not Started'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
