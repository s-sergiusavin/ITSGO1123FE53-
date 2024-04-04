import React from 'react';
import myImg from '../images/myImg.jpg'
import styles from './HomePage.module.scss'


const HomePage = () => {
    return(
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                   <img src={myImg}alt="myImg" className={styles.myImg} />
            </div>
        </div>
    )
}

export default HomePage;