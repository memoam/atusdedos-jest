import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>AtusDedos</title>
        <meta name="description" content="Proyecto" />
        <meta name="keywords" content="Proyecto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.intro}>
        <div className={styles.intro__logo}>
          <div className={styles.intro__imgFondo}>
            <Image
              src="/images/logoAtril.png"
              alt="Logo"
              width={50}
              height={90}
            />
          </div>
          <div className={styles.intro__text}>
            <p className={styles.intro__text_title}>¿que instrumento suena en ti?</p>
            <p className={styles.intro__text_txt}>dale sonido, dale ritmo... dale vida </p>
          </div>
        </div>
        <div className={styles.intro__imgFondo}>
          <Image
            src="/images/saxoPeople.jpg"
            alt="Logo"
            width={248}
            height={482}
          />
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.courses}>
          <div className={styles.course}>
            <p className={styles.course__text_title}>para aprender a tocar</p>
            <div className={styles.course__carts}>
              <div className={styles.cart}>
                <div className={styles.cart__information}>
                  <Image
                    src="/images/saxo.png"
                    alt="saxo"
                    width={85}
                    height={77.2}
                  />
                  <p>Saxofón alto</p>
                </div>
              </div>
              <div className={styles.cart}>
                <div className={styles.cart__information}>
                  <Image
                    src="/images/saxo.png"
                    alt="saxo"
                    width={85}
                    height={77.2}
                  />
                  <p>Violin</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.course}>
            <p className={styles.course__text_title}>habilidades auditivas</p>
            <div className={styles.course__carts}>
              <div className={styles.cart}>
                <div className={styles.cart__information}>
                  <Image
                    src="/images/saxo.png"
                    alt="saxo"
                    width={85}
                    height={77.2}
                  />
                  <p>oido perfecto</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.course}>
            <p className={styles.course__text_title}>Practica</p>
            <div className={styles.course__carts}>
              <div className={styles.cart}>
                <div className={styles.cart__information}>
                  <Image
                    src="/images/saxo.png"
                    alt="saxo"
                    width={85}
                    height={77.2}
                  />
                  <p>partituras</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
