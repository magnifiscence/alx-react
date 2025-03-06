import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); // Bind the method
  }

  handleClick() {
    const { id, markAsRead } = this.props;
    markAsRead(id); // Call markAsRead with the id
  }

  render() {
    const { type, value, html } = this.props;

    return (
      <li
        data-notification-type={type}
        onClick={this.handleClick} // Add onClick handler
      >
        {value}
        {html && <div dangerouslySetInnerHTML={html} />}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;