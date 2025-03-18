import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer'; // Keep the Footer import
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

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

// Define Aphrodite styles
const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  body: {
    padding: '20px',
  },
});

// App class definition
class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className={css(styles.app)}>
        <Notifications listNotifications={listNotifications} />
        <Header />
        <div className={css(styles.body)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget risus vitae mi tincidunt tincidunt.</p>
          </BodySection>
        </div>
        <Footer /> {/* Use the Footer component */}
      </div>
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
  logOut: () => {},
};

export default App;