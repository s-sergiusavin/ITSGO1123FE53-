import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din React Router
import styles from '../StartingPage.module.scss';
import './LeftSide.scss';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import MoreIcon from '@mui/icons-material/More';

const LeftSide = () => {
  return (
    <div className={styles.leftSide}>
      <div className="sidebar">
        <div className="sidebar__header">
          <h2>My Social App</h2>
        </div>
        <div className="sidebar__menu"> 
          <div className="menu__item">
            <Link to="/acasa">Acasă</Link>
            <HomeIcon />
          </div>
          <div className="menu__item">
            <Link to="/profil">Profil</Link>
            <Person2Icon/>
          </div>
          <div className="menu__item">
            <Link to="/prieteni">Prieteni</Link>
            <GroupIcon/>
          </div>
          <div className="menu__item">
            <Link to="/notificari">Notificari</Link>
            <NotificationsActiveIcon/>
          </div>
          <div className="menu__item">
            <Link to="/setari">Setari</Link>
            <ToggleOffIcon/>
          </div>
          <div className="menu__item">
            <Link to="/poze">Poze</Link>
            <CollectionsIcon/>
          </div>
          <div className="menu__item">
            <Link to="/videoclipuri">Videoclipuri</Link>
            <VideoCameraFrontIcon/>
          </div>
          <div className="menu__item">
            <Link to="/mai-multe">Mai multe</Link> 
            <MoreIcon/>
          </div>
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
