
import React, {
  useState, useEffect, useCallback,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';
export default function Header() {

  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <div className={styles.logo}>
          <button>Atus dedos</button>
        </div>
        <div className={styles.menu}>
          <button type="button">Iniciar secion</button>
          <button type="button">Crear cuenta</button>
        </div>
      </div>
    </div>
  );
}