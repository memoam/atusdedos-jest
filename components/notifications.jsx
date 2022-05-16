/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import NotificationsContext from '../context/notificationsContext';

export default function Notification() {
  const { notifications, setNotifications } = useContext(NotificationsContext);
  const removeNotification = (keyIndex) => {
    const removeNotifications = [
      ...notifications.slice(0, keyIndex - 1),
      ...notifications.slice(keyIndex, notifications.length)];
    setNotifications(removeNotifications);
  };

  const removeTemporaryNotification = () => {
    for (let i = 0; i < notifications.length; i += 1) {
      const auxExpires = parseFloat(notifications[i].expires);
      if (typeof auxExpires === 'number') {
        if (Math.floor((new Date().getTime() / 1000.0)) >= auxExpires) {
          const removeNotifications = [
            ...notifications.slice(0, i),
            ...notifications.slice(i + 1, notifications.length)];
          setNotifications(removeNotifications);
        }
      }
    }
  };

  // remove temporary notification, interval
  useEffect(() => {
    if (notifications.length > 0) {
      const removeNotificationInterval = setInterval(() => removeTemporaryNotification(), 1000);
      return () => clearInterval(removeNotificationInterval);
    }
    return undefined;
  });

  const returnNotifications = notifications.map((notification, index) => {
    const keyIndex = index + 1;
    const background = notification.type === 'warning' ? styles.alert__warning
      : notification.type === 'information' ? styles.alert__information
        : notification.type === 'confirmation' ? styles.alert__confirmation
          : styles.alert__error;
    return (
      <div key={keyIndex} className={background}>
        <div className={styles.alert__container}>
          <Image alt="alert" src={`/images/${notification.type}.svg`} width={22} height={25} />
          <div className={styles.alert__body}>
            {notification.title !== '' ? (<p className={styles.alert__body_title}>{notification.title}</p>) : (null)}
            <p className={styles.alert__body_txt}>{notification.text}</p>
          </div>
          <button type="button" onClick={() => removeNotification(keyIndex)}>&times;</button>
        </div>
      </div>
    );
  });
  return (
    returnNotifications
  );
}

