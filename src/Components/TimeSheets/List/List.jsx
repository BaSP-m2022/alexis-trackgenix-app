import React from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';

const List = ({ timeSheets, deleteItem }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr className={styles.firstRow}>
            <th>Project</th>
            <th>Task ID</th>
            <th>Task name</th>
            <th>Start date</th>
            <th>Worked hours</th>
            <th>Description</th>
            <th>Status</th>
            <th>Approved PM</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {timeSheets.map((timeSheet) => (
            <ListItem key={timeSheet._id} listTimeSheet={timeSheet} deleteItem={deleteItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;