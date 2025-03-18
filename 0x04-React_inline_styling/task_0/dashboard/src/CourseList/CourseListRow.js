import React from 'react';
import PropTypes from 'prop-types';

// Define styles as constants
const rowStyle = {
  backgroundColor: '#f5f5f5ab', // Background color for regular rows
};

const headerRowStyle = {
  backgroundColor: '#deb5b545', // Background color for header rows
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // Apply styles based on the isHeader prop
  const style = isHeader ? headerRowStyle : rowStyle;

  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr style={style}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={style}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={style}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;