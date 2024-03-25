import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from './Navigation.module.scss'
import { useState } from "react";
import logo from '../assets/images/logo.jpg';


function Navbar() {
    // adding the states
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    //add the active class
    const toggleActiveClass = () => {
      isActive ? navigate('/auth') : navigate('/')
      setIsActive(prevState => !prevState)

    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    //return events
    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
          <img src={logo}
                alt='login image'
                className={styles.logoImage}>
                 </img>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
              <a href='/' className={`${styles.logo}`}>funtag </a>
              </li>
              <li onClick={removeActive}>
                <a href='/my-profile' className={`${styles.navLink}`}>My Profile</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Settings</a>
              </li>
              <li onClick={toggleActiveClass}>
                <a href='/auth' className={`${styles.navLink}`}>
                <NavLink to='/auth'>{isActive ? 'Logout' : 'Login'}</NavLink>
                </a>
              </li>
            </ul>

            <div className={`${styles.menuItem} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;


// const Navigation = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(true);
//     const navigate = useNavigate();

//     const toggleAuth = () => {
//         isLoggedIn ? navigate('/auth') : navigate('/')
//         setIsLoggedIn(prevState => !prevState)
//     }

//     return (
//         <>
//         <header>
//             <Link to='/'>

//             <div className={styles.logo}>funtime</div>
//             </Link>


//             <nav>
//                 <img src={logo}
//                 alt='login image'
//                 className={styles.logoImage}>
//                 </img>
//                 <ul className={styles.menu}>
//                     <li className={styles.menuItem}>
//                         <NavLink to='/my-profile'>My Profile</NavLink>
//                     </li>
//                     <li className={styles.menuItem}>
//                         <NavLink to='/friends'>Friends</NavLink>
//                     </li>
//                     <li className={styles.menuItem} onClick={toggleAuth}>
//                         <NavLink to='/auth'>{isLoggedIn ? 'Logout' : 'Login'}</NavLink>
//                     </li>

//                 </ul>
//             </nav>
//         </header>
//         </>
//     )
// }

// export default Navigation;