import React from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{ float: 'right' }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            X
          </button>
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;