import LeftNav from "../ui/LeftNav";
import Main from "../ui/MainSection";
import RightNav from "../ui/RightNav";
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.mainContainer}>
            <LeftNav className={styles.leftNav}/>
            <Main className={styles.newsfeed}/>
            <RightNav className={styles.rightNav}/>
        </div>
    )
}

export default Home;