import {React, useState} from 'react';
import { Link } from 'react-router-dom';   
import styles from './LeftSide.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import MoreIcon from '@mui/icons-material/More';
import { Drawer } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsIcon from '@mui/icons-material/Settings';



const LeftSide = () => {
 
  const list = () => {
    return (
      <div className={styles.listClass}>
        <li><Link to="/saved">Saved</Link>
        <SaveIcon className={styles.iconStyle}/></li>
        <li><Link to="/groups">Groups</Link> <GroupsIcon className={styles.iconStyle}/></li>  
        <li><Link to="/events">Events</Link><EmojiEventsIcon className={styles.iconStyle}/></li>
        <li><Link to="/pages">Pages</Link> <AutoStoriesIcon className={styles.iconStyle}/></li>
        <li><Link to="/Gaming">Gaming</Link><SportsEsportsIcon className={styles.iconStyle}/></li>
        <li><Link to="/setings">Setings</Link><SettingsIcon className={styles.iconStyle}/></li>
      </div>
    );
  };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className={styles.leftSidePage}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__header}>
          <h2 className={styles.myApp}>My Social App</h2>
        </div>
        <div className={styles.sidebar__menu}> 
          <div className={styles.menu__item}>
            <Link to="/acasa">Acasă</Link>
            <HomeIcon />
          </div>
          <div className={styles.menu__item}>
            <Link to="/profil">Profil</Link>
            <Person2Icon/>
          </div>
          <div className={styles.menu__item}>
            <Link to="/prieteni">Prieteni</Link>
            <GroupIcon/>
          </div>
          <div className={styles.menu__item}>
            <Link to="/notificari">Notificari</Link>
            <NotificationsActiveIcon/>
          </div>
          <div className={styles.menu__item}>
            <Link to="/setari">Setari</Link>
            <ToggleOffIcon/>
          </div>
          <div className={styles.menu__item}>
            <Link to="/poze">Poze</Link>
            <CollectionsIcon/>
          </div>
          <div className={styles.menu__item}>
            <Link to="/videoclipuri">Videoclipuri</Link>
            <VideoCameraFrontIcon/>
          </div>


          <div className={`${styles.menu__item} ${styles.more}`} onClick={toggleMenu}>
            Mai multe
            <MoreIcon />
          </div>
          <Drawer anchor={'left'} open={isMenuOpen} onClose={toggleMenu}>
            {list()} 
          </Drawer>



        </div>
        <div className={styles.sidebar__footer}>
          <p>© 2024 My Social App</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;