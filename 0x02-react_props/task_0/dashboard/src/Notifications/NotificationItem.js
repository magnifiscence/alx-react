NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    value: PropTypes.string,
  };
  
  NotificationItem.defaultProps = {
    type: 'default',
  };