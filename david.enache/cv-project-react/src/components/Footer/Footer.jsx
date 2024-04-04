import React from 'react';
import styles from './Footer.module.scss'; // Fișierul de stilizare pentru footer
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterCon}>
        <p>© 2024 Enache David CV.</p>
        <div className={styles.socialIco}>
          <LinkedInIcon className={styles.icons}/>
          <InstagramIcon className={styles.icons}/>
          <FacebookIcon className={styles.icons}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
