import LeftNav from "../ui/LeftNav";
import Main from "../ui/Main";
import RightNav from "../ui/RightNav";
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.main}>
            <LeftNav/>
            <Main/>
            <RightNav/>
        </div>
    )
}

export default Home;