// import React from 'react';
import styles from './Footer.module.scss'; // Fișierul de stilizare pentru footer
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterCon}>
        <p>© 2024 Enache David CV.</p>
        <div className={styles.socialIco}>
        <Link to="https://www.linkedin.com/in/david-enache-09409723b/">
            <LinkedInIcon className={styles.icons}/>
          </Link>
          <Link to="https://github.com/Enache213">
          <GitHubIcon className={styles.icons}></GitHubIcon>
          </Link>
          <Link>
          <InstagramIcon className={styles.icons}/>
          </Link>
          <Link>
          <FacebookIcon className={styles.icons}/>
          </Link>

        </div>
      </div>
     
    </footer>
  );
}

export default Footer;
