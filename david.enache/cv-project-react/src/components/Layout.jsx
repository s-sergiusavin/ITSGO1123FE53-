// Layout.js
import React from 'react';
import Footer from '../components/Footer/Footer'; // Importă componenta Footer
import styles from './Layout.module.scss'; // Fișierul de stilizare pentru layout
import Contact from './NavBar/Contact'
import AboutMe from './NavBar/AboutMe';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        {children} {/* Aici va fi afișat conținutul specific fiecărei pagini */}
      </div>
      <Footer /> {/* Afișează footerul în partea de jos a paginii */}
      <Contact/>
      <AboutMe/>
    </div>
  );
};

export default Layout;
