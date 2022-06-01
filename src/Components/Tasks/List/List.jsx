import { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './list.module.css';

const List = () => {
  const [tasks, saveTasks] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`);
      const data = await response.json();
      saveTasks(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const delTask = (id) => {
    const confirmation = confirm('Are you sure you want to delete this task?');
    if (confirmation) {
      saveTasks([...tasks.filter((task) => task._id !== id)]);
      return fetch(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`, {
        method: 'DELETE'
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          alert('Task deleted successfully');
        });
    }
  };

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr className={styles.header}>
            <th id="taskName">Task Name</th>
            <th id="startDate">Start Date</th>
            <th id="workedHours">Worked Hours</th>
            <th id="description">Description</th>
            <th id="status">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <ListItem key={task._id} task={task} delTask={delTask} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
