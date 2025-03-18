import React from 'react';
import NotificationItem from '../Notifications/NotificationItem';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders App without crashing', () => {
    render(<App />);
  });

  test('contains the Notifications component', () => {
    render(<App />);
    const notificationsElement = screen.getByTestId('notifications');
    expect(notificationsElement).toBeInTheDocument();
  });

  test('contains the Header component', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();
  });

  test('contains the Login component when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    const loginElement = screen.getByRole('textbox', { name: /email/i });
    expect(loginElement).toBeInTheDocument();
  });

  test('contains the Footer component', () => {
    render(<App />);
    const footerElement = screen.getByText(/Copyright/i);
    expect(footerElement).toBeInTheDocument();
  });

  test('does not display CourseList when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    const courseListElement = screen.queryByTestId('course-list');
    expect(courseListElement).not.toBeInTheDocument();
  });

  test('does not display Login when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    const loginElement = screen.queryByRole('textbox', { name: /email/i });
    expect(loginElement).not.toBeInTheDocument();
  });

  test('displays CourseList when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    const courseListElement = screen.getByTestId('course-list');
    expect(courseListElement).toBeInTheDocument();
  });
});