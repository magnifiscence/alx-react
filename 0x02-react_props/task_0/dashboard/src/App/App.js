import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import './App.css';

// Define the listCourses array
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

// Define the listNotifications array
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

function App({ isLoggedIn }) {
  return (
    <>
      {/* Pass listNotifications to the Notifications component */}
      <Notifications listNotifications={listNotifications} />
      <Header />
      {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      <Footer />
    </>
  );
}

// Define propTypes for isLoggedIn
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

// Set default value for isLoggedIn
App.defaultProps = {
  isLoggedIn: false,
};

export default App;