import React, { useState, useRef, useEffect } from 'react';
import { FaPlus, FaTasks } from 'react-icons/fa';
import styles from './Teamheader.module.css'; // Import CSS module

const Teamheader = ({ addTask }) => {
  const [showAddPeople, setShowAddPeople] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [task, setTask] = useState({ taskName: '', assignee: '', dueDate: '', priority: 'P1', status: 'Not Started' });
  const peopleListRef = useRef(null);

  // Updated list of people
  const peopleList = [
    { id: 1, name: 'Jyoti', profilePicture: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Neetu', profilePicture: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Ravi', profilePicture: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Deepak', profilePicture: 'https://via.placeholder.com/40' },
    { id: 5, name: 'Guru', profilePicture: 'https://via.placeholder.com/40' },
    { id: 6, name: 'Kunjan', profilePicture: 'https://via.placeholder.com/40' },
    { id: 7, name: 'Sanya', profilePicture: 'https://via.placeholder.com/40' },
    { id: 8, name: 'Nitin', profilePicture: 'https://via.placeholder.com/40' },
    { id: 9, name: 'Sachin', profilePicture: 'https://via.placeholder.com/40' }
  ];

  const toggleAddPeople = () => setShowAddPeople(!showAddPeople);
  const toggleCreateTask = () => setShowCreateTask(!showCreateTask);

  const addPersonToTeam = (person) => {
    if (!teamMembers.find((member) => member.id === person.id)) {
      setTeamMembers([...teamMembers, person]);
    }
  };

  // Function to automatically set priority based on due date
  const setPriorityBasedOnDate = (dueDate) => {
    const today = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = dueDateObj - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 2) {
      return 'P1'; // Highest priority
    } else if (diffDays <= 5) {
      return 'P2';
    } else if (diffDays <= 10) {
      return 'P3';
    } else {
      return 'P4'; // Lowest priority
    }
  };

  const handleDueDateChange = (e) => {
    const newDueDate = e.target.value;
    const newPriority = setPriorityBasedOnDate(newDueDate);
    setTask({ ...task, dueDate: newDueDate, priority: newPriority });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    addTask(task);  // Call addTask to pass the new task to the parent component
    setTask({ taskName: '', assignee: '', dueDate: '', priority: 'P1', status: 'Not Started' });
    toggleCreateTask();
  };

  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (peopleListRef.current && !peopleListRef.current.contains(event.target) && !event.target.matches(`.${styles.button1}`)) {
        setShowAddPeople(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.teamWrapper}>
      <div className={styles.teamContainer}>
        <div className={styles.teamInfo}>
          <div className={styles.infoBlock}>
            <h3>Today's Date</h3>
            <p>{today}</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>People in Team</h3>
            <div className={styles.profileStack}>
              {teamMembers.map((member) => (
                <img
                  key={member.id}
                  src={member.profilePicture}
                  alt={member.name}
                  className={styles.profilePicture}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={toggleCreateTask}>
            <FaTasks className={styles.buttonIcon} /> Create Task
          </button>
          <div className={styles.profile} onClick={toggleAddPeople}>
            <button className={styles.button1}>
              <FaPlus className={styles.button1Icon} /> Add People
            </button>
            {showAddPeople && (
              <div className={styles.peopleList} ref={peopleListRef}>
                <ul>
                  {peopleList.map((person) => (
                    <li key={person.id} onClick={() => addPersonToTeam(person)}>
                      <img src={person.profilePicture} alt={person.name} className={styles.listProfilePicture} />
                      {person.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {showCreateTask && (
        <div className={styles.taskForm}>
          <h3>Create Task</h3>
          <form onSubmit={handleTaskSubmit}>
            <div className={styles.fullWidth}>
              <label>Task Name</label>
              <input
                type="text"
                name="taskName"
                placeholder="Enter task name"
                value={task.taskName}
                onChange={(e) => setTask({ ...task, taskName: e.target.value })}
              />
            </div>
            <div className={styles.fullWidth}>
              <label>Assignee</label>
              <select
                name="assignee"
                value={task.assignee}
                onChange={(e) => setTask({ ...task, assignee: e.target.value })}
              >
                <option value="">Select Assignee</option>
                {teamMembers.map((member) => (
                  <option key={member.id} value={member.name}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.twoColumns}>
              <div>
                <label>Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={handleDueDateChange}
                />
              </div>
              <div>
                <label>Priority</label>
                <select name="priority" value={task.priority} readOnly>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                  <option value="P3">P3</option>
                  <option value="P4">P4</option>
                </select>
              </div>
            </div>
            <button type="submit">Create Task</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Teamheader;
