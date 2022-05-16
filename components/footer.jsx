import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

const ImageComponent = forwardRef(({
  src, alt, width, height, href,
}, ref) => (
  <a ref={ref} href={href}>
    <Image src={src} alt={alt} width={width} height={height} />
  </a>
));

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__MainContent}>
        <div className={styles.footer__MainContent_columns}>
          <div className={styles.footer__MainContent_logo}>
            <button>atus dedos</button>
          </div>
          <div className={styles.footer__MainContent_Right}>
            <div>
              <p>
               Escuela de musica
              </p>
            </div>

            <div className={styles.footer__MainContent_Right_Columns}>
              <div className={styles.footer__MainContent_Right_ColumnsItem}>
                <Link href="/">
                  ¿Necesitas ayuda?
                </Link>
                <Link href="/">
                  Preguntas frecuentes
                </Link>
              </div>
              <div className={styles.footer__MainContent_Right_ColumnsItem}>
                <Link href="/">
                  Aviso de privacidad
                </Link>
                <Link href="/">
                  Términos y Condiciones
                </Link>
                <Link href="/">
                  Estadísticas trimestrales
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.footer__SocialContent}>
            <div className={styles.footer__SocialContent_links}>
              <p>Visítanos en</p>
              <div className={styles.footer__SocialContent_li}>
                <div className={styles.footer__SocialContent_link}>
                  <Link href="https://facebook.com" passHref>
                    <a target="_blank">
                      <Image
                        src="/images/facebook-logo.svg"
                        alt="facebook"
                        width={27}
                        height={27}
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.footer__SocialContent_link}>
                  <Link href="https://instagram.com" passHref>
                    <a target="_blank">
                      <Image
                        src="/images/instagram-logo.svg"
                        alt="instagram"
                        width={27}
                        height={27}
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.footer__SocialContent_link}>
                  <Link href="https://twitter.com" passHref>
                    <a target="_blank">
                      <Image
                        src="/images/twitter-logo.svg"
                        alt="twitter"
                        width={27}
                        height={27}
                      />
                    </a>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__Copyrights}>
        <p>
          <Link href="/">
            atusdedos.com®
          </Link>
          Todos los Derechos Reservados 2022
        </p>
      </div>
    </footer>
  );
}

ImageComponent.defaultProps = {
  href: null,
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  href: PropTypes.string,
};
