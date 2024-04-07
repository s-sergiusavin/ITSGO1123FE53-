import styles from './Layout.module.scss'
import imagineFundal from '../assets/imagineFundal.jpg'

const Layout = ({children}  ) => {
    return(
        <div className={styles.container}>
        <div className={styles.background} style={{ backgroundImage: `url(${imagineFundal})` }}></div> {/* Imaginea de fundal */}
        <div className={styles.content}>{children}</div> {/* Paginile individuale */}
    </div>
    )
}
export default Layout;