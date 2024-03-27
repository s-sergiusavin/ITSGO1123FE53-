import React from 'react';
import styles from '../StartingPage.module.scss'
import './LeftSide.scss'
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
          <a href="#">Acasă</a>
          <HomeIcon />
        </div>
        <div className="menu__item">
          <a href="#">Profil</a>
          <Person2Icon/>
        </div>
        <div className="menu__item">
          <a href="#">Prieteni</a>
          <GroupIcon/>
        </div>
        <div className="menu__item">
          <a href="#">Notificari</a>
          <NotificationsActiveIcon/>
        </div>
        <div className="menu__item">
          <a href="#">Setari</a>
          <ToggleOffIcon/>
        </div>
        <div className="menu__item">
          <a href="#">Poze</a>
          <CollectionsIcon/>
        </div>
        <div className="menu__item">
          <a href="#">Videoclipuri</a>
          <VideoCameraFrontIcon/>
        </div>
        <div className="menu__item">
          <a href="#">Mai multe</a>
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
