import React from 'react';

// Define an array of deadlines
const deadlines = [
  { assignment: 'Math Assignment', dueDate: '2023-07-15' },
  { assignment: 'History Essay', dueDate: '2023-07-20' },
  { assignment: 'Science Project', dueDate: '2023-07-25' },
];

const Deadlines = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Upcoming Deadlines</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Assignment</th>
            <th style={styles.th}>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {deadlines.map((deadline, index) => (
            <tr key={index}>
              <td style={styles.td}>{deadline.assignment}</td>
              <td style={styles.td}>{deadline.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Add some basic styles
const styles = {
  container: {
    margin: '20px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '50%',
  },
  heading: {
    textAlign: 'left',
    color: '#333',
    fontSize: '24px',
    marginBottom: '15px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '10px',
    textAlign: 'left',
    color: '#333',
    fontWeight: 'bold',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default Deadlines;
