import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import BodySection from '../BodySection/BodySection'; // Import BodySection
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'; // Import BodySectionWithMarginBottom
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

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this); // Bind the event handler
  }

  componentDidMount() {
    // Add event listener for keydown when the component mounts
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Remove event listener when the component unmounts
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    // Check if Ctrl + h is pressed
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out'); // Display alert
      this.props.logOut(); // Call the logOut function
    }
  }

  render() {
    const { isLoggedIn } = this.props; // Destructure isLoggedIn from props
    return (
      <>
        {/* Pass listNotifications to the Notifications component */}
        <Notifications listNotifications={listNotifications} />
        <Header />
        {/* Wrap CourseList or Login in BodySectionWithMarginBottom */}
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        {/* Add a new BodySection for News */}
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget risus vitae mi tincidunt tincidunt.</p>
        </BodySection>
        <Footer />
      </>
    );
  }
}

// Define propTypes for isLoggedIn and logOut
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

// Set default values for isLoggedIn and logOut
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}, // Default empty function
};

export default App;