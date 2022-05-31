import React from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './list.module.css';

const List = (props) => {
  const { tasks, delItem, setShowModal } = props;

  return (
    <div className={styles.table}>
      <table className={styles.header}>
        <thead>
          <tr>
            <th id="taskName">Task Name</th>
            <th id="startDate">Start Date</th>
            <th id="workedHours">Worked Hours</th>
            <th id="description">Description</th>
            <th id="status">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <ListItem key={task._id} task={task} delItem={delItem} setShowModal={setShowModal} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
