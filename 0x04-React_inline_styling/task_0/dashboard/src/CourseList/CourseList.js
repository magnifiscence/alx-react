import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow isHeader={false} textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

// Define propTypes for type checking
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

// Define defaultProps for optional props
CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;