import React from 'react';
import styles from '../StartingPage.module.scss'
import './LeftSide.scss'

const LeftSide = () => {
    return (
        <div className={styles.leftSide}>
            <div className="sidebar">
      <div className="sidebar__header">
        {/* Logo-ul sau numele aplicației */}
        <h2>My Social App</h2>
      </div>
      <div className="sidebar__menu">
        {/* Link-uri pentru diferitele secțiuni */}
        <a href="#">Acasă</a>
        <a href="#">Profil</a>
        <a href="#">Prietenii</a>
        <a href="#">Notificări</a>
        <a href="#">Setări</a>
      </div>
      <div className="sidebar__footer">
        {/* Un mic footer */}
        <p>© 2024 My Social App</p>
      </div>
    </div>
        </div>
    );
}

export default LeftSide;
