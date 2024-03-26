import { Link, NavLink } from "react-router-dom"
import styles from './Navigation.module.scss'

const Navigation = () => {
    return (
        <header>
            <Link to='/'>
                <div className={styles.logo}>Social media app</div>
            </Link>

            <nav>
                <ul className={styles.menu}>
                    <li className={style.menuItem}>
                        <NavLink to='/myProfile'/>
                    </li>
                    <li className={style.menuItem}>

                    </li>
                    <li className={style.menuItem}>

                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;