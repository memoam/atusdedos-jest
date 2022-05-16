import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css'
import NotificatiosContext from '../context/notificationsContext';

export default function MyApp({ Component, pageProps }) {
  const [notifications, setNotifications] = useState([1]);
  // add new notification
  const addNotification = (type, title, text, expire) => {
    const expires = expire === 'render' ? expire : `${Math.floor((new Date().getTime() + (parseFloat(expire) * 1000)) / 1000)}`;
    setNotifications([...notifications, {
      type, title, text, expires,
    }]);
  };
  return (
    <NotificatiosContext.Provider
      value={{ notifications, setNotifications, addNotification }}
    >
      <Component {...pageProps} />
    </NotificatiosContext.Provider>

  )
}
MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};