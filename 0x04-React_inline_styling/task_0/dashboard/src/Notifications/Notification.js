import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  notificationsPanel: {
    border: '1px solid #ccc', // Add a border
    padding: '10px', // Add padding
    backgroundColor: '#f9f9f9', // Set background color
  },
});

function Notifications() {
  return (
    <div className={css(styles.notificationsPanel)}>
      <p>Here is the list of notifications</p>
      <ul>
        <li>New course available</li>
        <li>New resume available</li>
        <li>Urgent requirement - complete by EOD</li>
      </ul>
    </div>
  );
}

export default Notifications;