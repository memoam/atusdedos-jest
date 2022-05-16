import React, { useState, useEffect, useContext } from 'react';
import ReactModal from 'react-modal';
import styles from '../styles/Header.module.scss';
//import NotificationsContext from '../context/notificationsContext';
// import Notification from './notifications';
import SingIn from './singIn';
import SingUp from './singUp';

export default function Header() {
  const [modal, setModal] = useState({ open: false, type: '' });
/*   const { notifications, setNotifications } = useContext(NotificationsContext);
  useEffect(() => {
    // remove temporary notifications when header is rendered
    if (notifications.length > 0) {
      for (let i = 0; i < notifications.length; i += 1) {
        if (notifications[i].expires === 'render') {
          const removeNotifications = [
            ...notifications.slice(0, i),
            ...notifications.slice(i + 1, notifications.length)];
          setNotifications(removeNotifications);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */
  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <div className={styles.logo}>
          <button>Atus dedos</button>
        </div>
        <div className={styles.menu}>
          <button type="button" onClick={() => setModal({ open: true, type: 'SingIn' })}>Iniciar secion</button>
          <button type="button" onClick={() => setModal({ open: true, type: 'SingUp' })}>Crear cuenta</button>
        </div>
      </div>
{/*       <div className={styles.notification}>
        <Notification />
      </div> */}

      <ReactModal
        isOpen={modal.open}
        onRequestClose={() => setModal({ open: false, type: '' })}
        className={styles.modal}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <button onClick={() => setModal({ open: false, type: '' })} className={styles.modal__close} type="button">
          &times;
        </button>
        {modal.type === 'SingIn' ? (<SingIn />) : (<SingUp />)}
      </ReactModal>
    </div>
  );
}